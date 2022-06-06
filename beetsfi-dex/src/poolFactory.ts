import {
  PoolCreated
} from "../generated/WeightedPoolFactory/WeightedPoolFactory"
import { Address, Bytes } from '@graphprotocol/graph-ts'
import { WeightedPool } from "../generated/WeightedPoolFactory/WeightedPool"
import { StablePool } from "../generated/StablePoolFactory/StablePool"
import { Vault } from '../generated/Vault/Vault'
import { ERC20 } from '../generated/Vault/ERC20'
import { VAULT_ADDRESS, ZERO_BD, PoolType } from "./constants"
import { 
  loadPoolToken, 
  getPoolTokenId, 
  scaleDown,
  getToken
} from "./helpers"
import { Vault as VaultEntity, Pool, PoolToken } from "../generated/schema"

export function handleNewWeightedPool(event: PoolCreated): void {
  createWeightedLikePool(event, PoolType.Weighted)
}

export function handleNewLiquidityBootstrappingPool(event: PoolCreated): void {
  createWeightedLikePool(event, PoolType.LiquidityBootstrapping)
}

export function handleNewStablePool(event: PoolCreated): void {
  createStableLikePool(event, PoolType.Stable)
}

export function handleNewMetaStablePool(event: PoolCreated): void {
  createStableLikePool(event, PoolType.MetaStable)
}

function createWeightedLikePool(event: PoolCreated, poolType: string): string {
  let poolAddress: Address = event.params.pool
  let poolContract = WeightedPool.bind(poolAddress)

  let poolIdCall = poolContract.try_getPoolId()
  let poolId = poolIdCall.value

  let pool = handleNewPool(event, poolId)
  pool.poolType = poolType
  pool.factory = event.address

  let vaultContract = Vault.bind(Address.fromString(VAULT_ADDRESS))
  let tokensCall = vaultContract.try_getPoolTokens(poolId)

  if (!tokensCall.reverted) {
    let tokens = tokensCall.value.value0
    pool.tokensList = changetype<Bytes[]>(tokens)

    for (let i: i32 = 0; i < tokens.length; i++) {
      createPoolTokenEntity(poolId.toHexString(), tokens[i])
    }
  }
  pool.save()

  updatePoolWeights(poolId.toHexString())

  return poolId.toHexString()
}

function createStableLikePool(event: PoolCreated, poolType: string): string {
  let poolAddress: Address = event.params.pool
  let poolContract = StablePool.bind(poolAddress)

  let poolIdCall = poolContract.try_getPoolId()
  let poolId = poolIdCall.value

  let pool = handleNewPool(event, poolId)
  pool.poolType = poolType
  pool.factory = event.address

  let vaultContract = Vault.bind(Address.fromString(VAULT_ADDRESS))
  let tokensCall = vaultContract.try_getPoolTokens(poolId)

  if (!tokensCall.reverted) {
    let tokens = tokensCall.value.value0
    pool.tokensList = changetype<Bytes[]>(tokens)

    for (let i: i32 = 0; i < tokens.length; i++) {
      createPoolTokenEntity(poolId.toHexString(), tokens[i])
    }
  }

  pool.save()

  return poolId.toHexString()
}

function handleNewPool(event: PoolCreated, poolId: Bytes): Pool {
  let poolAddress: Address = event.params.pool

  let pool = Pool.load(poolId.toHexString())
  if (pool == null) {
    pool = newPoolEntity(poolId.toHexString())

    pool.createTime = event.block.timestamp.toI32()
    pool.address = poolAddress
    pool.save()

    let vault = VaultEntity.load(VAULT_ADDRESS)
    if (vault === null) {
      vault = new VaultEntity(VAULT_ADDRESS)
      vault.save()
    }
  }
  return pool
}

export function newPoolEntity(poolId: string): Pool {
  let pool = new Pool(poolId)
  pool.strategyType = i32(parseInt(poolId.slice(42, 46)))
  pool.tokensList = []
  return pool
}

export function createPoolTokenEntity(poolId: string, tokenAddress: Address): void {
  let poolTokenId = getPoolTokenId(poolId, tokenAddress)

  let token = ERC20.bind(tokenAddress)
  let decimals = 18
  let decimalCall = token.try_decimals()

  if (!decimalCall.reverted) {
    decimals = decimalCall.value
  }

  let poolToken = new PoolToken(poolTokenId)
  let _token = getToken(tokenAddress)
  poolToken.poolId = poolId
  poolToken.address = tokenAddress.toHexString()
  poolToken.balance = ZERO_BD
  poolToken.token = _token.id
  poolToken.save()
}

export function updatePoolWeights(poolId: string): void {
  let pool = Pool.load(poolId)
  if (pool == null) return

  let poolContract = WeightedPool.bind(changetype<Address>(pool.address))

  let tokensList = pool.tokensList
  let weightsCall = poolContract.try_getNormalizedWeights()
  if (!weightsCall.reverted) {
    let weights = weightsCall.value
    for (let i: i32 = 0; i < tokensList.length; i++) {
      let tokenAddress = changetype<Address>(tokensList[i])
      let weight = weights[i]
      let poolToken = loadPoolToken(poolId, tokenAddress)
      if (poolToken != null) {
        poolToken.weight = scaleDown(weight, 18)
        poolToken.save()
      }
    }
  }

  pool.save()
}