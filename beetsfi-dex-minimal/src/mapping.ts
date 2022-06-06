import {
  Swap as SwapEvent
} from "../generated/Vault/Vault"
import { Swap, Token, Transaction, Vault } from "../generated/schema"
import { ONE_BI, VAULT_ADDRESS, ZERO_BD, ZERO_BI } from "./constants"
import { convertTokenToDecimal, fetchTokenDecimals, fetchTokenName, fetchTokenSymbol, fetchTokenTotalSupply } from "./helpers"
import { Address, BigInt, log } from "@graphprotocol/graph-ts"
import { Vault as VaultContract } from "../generated/Vault/Vault"


export function handleSwapEvent(event: SwapEvent): void {
  log.info("Swap event", [])
  let vault = Vault.load(VAULT_ADDRESS)
  if (vault === null) {
    vault = new Vault(VAULT_ADDRESS)
    vault.totalSwapCount = ZERO_BI
  }
  vault.totalSwapCount = vault.totalSwapCount.plus(ONE_BI)
  vault.save()

  let transaction = Transaction.load(event.transaction.hash.toHexString())
  if (transaction === null) {
    transaction = new Transaction(event.transaction.hash.toHexString())
    transaction.blockNumber = event.block.number
    transaction.timestamp = event.block.timestamp
  }
  transaction.save()

  // create the tokens
  let tokenIn = Token.load(event.params.tokenIn.toHexString())
  let tokenOut = Token.load(event.params.tokenOut.toHexString())

  // fetch info if null
  if (tokenIn === null) {
    tokenIn = new Token(event.params.tokenIn.toHexString())
    tokenIn.symbol = fetchTokenSymbol(event.params.tokenIn)
    tokenIn.name = fetchTokenName(event.params.tokenIn)
    let totalSupplyIn = fetchTokenTotalSupply(event.params.tokenIn)
    if(totalSupplyIn)
    {
      tokenIn.totalSupply = totalSupplyIn
    }else
    {
      tokenIn.totalSupply = BigInt.fromI32(0)
    }
    let decimals = fetchTokenDecimals(event.params.tokenIn)

    // fail if we couldn't figure out the decimals
    if (decimals === null) {
      return
    }

    tokenIn.decimals = decimals
    tokenIn.totalLiquidity = ZERO_BD
    tokenIn.save()
  }

  // fetch info if null
  if (tokenOut === null) {
    tokenOut = new Token(event.params.tokenOut.toHexString())
    tokenOut.symbol = fetchTokenSymbol(event.params.tokenOut)
    tokenOut.name = fetchTokenName(event.params.tokenOut)
    let totalSupplyOut = fetchTokenTotalSupply(event.params.tokenOut)
    if(totalSupplyOut)
    {
      tokenOut.totalSupply = totalSupplyOut
    }else
    {
      tokenOut.totalSupply = BigInt.fromI32(0)
    }
    let decimals = fetchTokenDecimals(event.params.tokenOut)

    // fail if we couldn't figure out the decimals
    if (decimals === null) {
      return
    }
    
    tokenOut.decimals = decimals
    tokenOut.totalLiquidity = ZERO_BD
    tokenOut.save()
  }

  let amountIn = ZERO_BD
  var amountOut = ZERO_BD
  if(tokenIn && tokenOut)
  {
    amountIn = convertTokenToDecimal(event.params.amountIn, tokenIn.decimals)
    amountOut = convertTokenToDecimal(event.params.amountOut, tokenOut.decimals)
  }

  let swapId = event.transaction.hash.toHexString().concat('-').concat(event.logIndex.toString())
  let swap = new Swap(swapId)
  let poolId = event.params.poolId
  swap.transaction = transaction.id
  swap.timestamp = transaction.timestamp
  swap.poolId = poolId
  swap.from = event.transaction.from
  swap.tokenIn = tokenIn.id
  swap.tokenOut = tokenOut.id
  swap.tokenAmountIn = amountIn
  swap.tokenAmountOut = amountOut
  swap.logIndex = event.logIndex

  let vaultContract = VaultContract.bind(Address.fromString(VAULT_ADDRESS))
  let tokensCall = vaultContract.try_getPoolTokens(poolId)

  if (!tokensCall.reverted) {
    swap.poolTokenBalances = tokensCall.value.value1
  }

  swap.save();
}
