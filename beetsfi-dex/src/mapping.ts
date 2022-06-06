import {
  PoolBalanceChanged,
  Swap as SwapEvent
} from "../generated/Vault/Vault"
import { Pool, Swap, Transaction, Vault } from "../generated/schema"
import { VAULT_ADDRESS, ZERO_BI } from "./constants"
import { getToken, isVariableWeightPool, loadPoolToken, scaleDown, tokenToDecimal } from "./helpers"
import { Address, BigDecimal, BigInt, log } from "@graphprotocol/graph-ts"
import { updatePoolWeights } from "./poolFactory"


export function handleSwapEvent(event: SwapEvent): void {
  log.info("Swap event", [])
  let poolId = event.params.poolId
  let pool = Pool.load(poolId.toHexString())
  if (pool == null) {
    log.warning('Pool not found in handleSwapEvent: {}', [poolId.toHexString()])
    return
  }
  if (isVariableWeightPool(pool)) {
    // Some pools' weights update over time so we need to update them after each swap
    updatePoolWeights(poolId.toHexString());
  }
  let vault = Vault.load(VAULT_ADDRESS)
  if (vault === null) {
    vault = new Vault(VAULT_ADDRESS)
    vault.save()
  }

  let transactionHash = event.transaction.hash
  let transaction = Transaction.load(transactionHash.toHexString())
  if (transaction === null) {
    transaction = new Transaction(transactionHash.toHexString())
    transaction.blockNumber = event.block.number
    transaction.timestamp = event.block.timestamp
  }
  transaction.save()

  let tokenInAddress: Address = event.params.tokenIn
  let tokenOutAddress: Address = event.params.tokenOut

  let poolTokenIn = loadPoolToken(
    poolId.toHexString(), 
    tokenInAddress
  )
  let tokenIn = getToken(tokenInAddress)

  let poolTokenOut = loadPoolToken(
    poolId.toHexString(), 
    tokenOutAddress
  )
  let tokenOut = getToken(tokenOutAddress)

  if (poolTokenIn == null || poolTokenOut == null) {
    log.warning('PoolToken not found in handleSwapEvent: (tokenIn: {}), (tokenOut: {})', [
      tokenInAddress.toHexString(),
      tokenOutAddress.toHexString(),
    ])
    return
  }
  if(tokenIn == null || tokenOut == null) {
    log.warning('Token not found in handleSwapEvent: (tokenIn: {}), (tokenOut: {})', [
      tokenInAddress.toHexString(),
      tokenOutAddress.toHexString(),
    ])
    return
  }

  let tokenAmountIn: BigDecimal = scaleDown(event.params.amountIn, tokenIn.decimals)
  let tokenAmountOut: BigDecimal = scaleDown(event.params.amountOut, tokenOut.decimals)

  let swapId = transactionHash.toHexString().concat('-').concat(event.logIndex.toString())
  let swap = new Swap(swapId)
  swap.transaction = transaction.id
  swap.timestamp = transaction.timestamp
  swap.poolId = poolId.toHex()
  swap.from = event.transaction.from
  swap.tokenIn = tokenInAddress.toHexString()
  swap.tokenOut = tokenOutAddress.toHexString()
  swap.tokenAmountIn = tokenAmountIn
  swap.tokenAmountOut = tokenAmountOut
  swap.logIndex = event.logIndex

  let newInAmount = poolTokenIn.balance.plus(tokenAmountIn)
  poolTokenIn.balance = newInAmount
  poolTokenIn.save()

  let newOutAmount = poolTokenOut.balance.minus(tokenAmountOut);
  poolTokenOut.balance = newOutAmount
  poolTokenOut.save()

  swap.balanceIn = poolTokenIn.balance
  swap.balanceOut = poolTokenOut.balance

  let tokenAddresses = pool.tokensList
  let poolTokenBalances = new Array<BigDecimal>(tokenAddresses.length)

  for (let i: i32 = 0; i < tokenAddresses.length; i++) {
    let tokenAddress: Address = Address.fromString(tokenAddresses[i].toHexString())
    let poolToken = loadPoolToken(poolId.toHexString(), tokenAddress)
    if (poolToken == null) {
      throw new Error('poolToken not found')
    }
    poolTokenBalances[i] = poolToken.balance
  }

  swap.poolTokenBalances = poolTokenBalances
  swap.save()
}

export function handleBalanceChange(event: PoolBalanceChanged): void {
  let amounts: BigInt[] = event.params.deltas;

  if (amounts.length === 0) {
    return;
  }
  let total: BigInt = amounts.reduce<BigInt>((sum, amount) => sum.plus(amount), new BigInt(0));
  if (total.gt(ZERO_BI)) {
    handlePoolJoined(event);
  } else {
    handlePoolExited(event);
  }
}

function handlePoolJoined(event: PoolBalanceChanged): void {
  let poolId: string = event.params.poolId.toHexString();
  let amounts: BigInt[] = event.params.deltas;
  let transactionHash = event.transaction.hash;

  let pool = Pool.load(poolId);
  if (pool == null) {
    log.warning('Pool not found in handlePoolJoined: {} {}', [poolId, transactionHash.toHexString()]);
    return;
  }
  let tokenAddresses = pool.tokensList;

  for (let i: i32 = 0; i < tokenAddresses.length; i++) {
    let tokenAddress: Address = Address.fromString(tokenAddresses[i].toHexString());
    let poolToken = loadPoolToken(poolId, tokenAddress);
    let token = getToken(tokenAddress);

    if (poolToken == null) {
      throw new Error('poolToken not found');
    }
    if(token == null) {
      throw new Error('Token not found');
    }
    let tokenAmountIn = tokenToDecimal(amounts[i], token.decimals);
    let newAmount = poolToken.balance.plus(tokenAmountIn);
    poolToken.balance = newAmount;
    poolToken.save();
  }
}

function handlePoolExited(event: PoolBalanceChanged): void {
  let poolId = event.params.poolId.toHex();
  let amounts = event.params.deltas;
  let transactionHash = event.transaction.hash;

  let pool = Pool.load(poolId);
  if (pool == null) {
    log.warning('Pool not found in handlePoolExited: {} {}', [poolId, transactionHash.toHexString()]);
    return;
  }
  let tokenAddresses = pool.tokensList;

  for (let i: i32 = 0; i < tokenAddresses.length; i++) {
    let tokenAddress: Address = Address.fromString(tokenAddresses[i].toHexString());
    let poolToken = loadPoolToken(poolId, tokenAddress);
    let token = getToken(tokenAddress);
    if (poolToken == null) {
      throw new Error('poolToken not found');
    }
    if(token == null) {
      throw new Error('Token not found');
    }
    let tokenAmountOut = tokenToDecimal(amounts[i].neg(), token.decimals);
    let newAmount = poolToken.balance.minus(tokenAmountOut);
    poolToken.balance = newAmount;
    poolToken.save();
  }
}