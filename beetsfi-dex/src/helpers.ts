import { Address, BigDecimal, BigInt, log } from "@graphprotocol/graph-ts"
import { ERC20 } from "../generated/Vault/ERC20"
import { ONE_BI, PoolType, ZERO_BI } from "./constants"
import { Pool, PoolToken, Token } from "../generated/schema"

export function exponentToBigDecimal(decimals: BigInt): BigDecimal {
  let bd = BigDecimal.fromString('1')
  for (let i = ZERO_BI; i.lt(decimals as BigInt); i = i.plus(ONE_BI)) {
    bd = bd.times(BigDecimal.fromString('10'))
  }
  return bd
}

export function isNullEthValue(value: string): boolean {
  return value == '0x0000000000000000000000000000000000000000000000000000000000000001'
}

export function convertTokenToDecimal(tokenAmount: BigInt, exchangeDecimals: BigInt): BigDecimal {
  if (exchangeDecimals == ZERO_BI) {
    return tokenAmount.toBigDecimal()
  }
  return tokenAmount.toBigDecimal().div(exponentToBigDecimal(exchangeDecimals))
}

export function getToken(tokenAddress: Address): Token {
  let token = Token.load(tokenAddress.toHexString())
  if (token == null) {
    token = createToken(tokenAddress)
  }
  return token
}

export function createToken(tokenAddress: Address): Token {
  let erc20token = ERC20.bind(tokenAddress)
  let token = new Token(tokenAddress.toHexString())
  let name = ''
  let symbol = ''
  let decimals = 0

  // attempt to retrieve erc20 values
  let maybeName = erc20token.try_name()
  let maybeSymbol = erc20token.try_symbol()
  let maybeDecimals = erc20token.try_decimals()

  if (!maybeName.reverted) name = maybeName.value
  if (!maybeSymbol.reverted) symbol = maybeSymbol.value
  if (!maybeDecimals.reverted) decimals = maybeDecimals.value

  token.name = name
  token.symbol = symbol
  token.decimals = decimals
  token.save()
  return token
}

export function scaleDown(num: BigInt, decimals: i32): BigDecimal {
  return num.divDecimal(BigInt.fromI32(10).pow(u8(decimals)).toBigDecimal())
}

export function loadPoolToken(poolId: string, tokenAddress: Address): PoolToken | null {
  return PoolToken.load(getPoolTokenId(poolId, tokenAddress))
}

export function getPoolTokenId(poolId: string, tokenAddress: Address): string {
  return poolId.concat('-').concat(tokenAddress.toHexString())
}

export function tokenToDecimal(amount: BigInt, decimals: i32): BigDecimal {
  let scale = BigInt.fromI32(10)
    .pow(decimals as u8)
    .toBigDecimal();
  return amount.toBigDecimal().div(scale);
}

export function isVariableWeightPool(pool: Pool): boolean {
  return pool.poolType == PoolType.LiquidityBootstrapping || pool.poolType == PoolType.Investment;
}
