import { BigInt } from "@graphprotocol/graph-ts"
import {
  AddToken,
  Claim,
  Deposit,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/MRC20Bridge/MRC20Bridge"
import { setClaim } from "./claim"
import { setDeposit } from "./deposit"

export function handleAddToken(event: AddToken): void {
}

export function handleClaim(event: Claim): void {
  
  setClaim(event.block,event.transaction.hash,event.params.txId,event.params.user,event.params.fromChain)
}

export function handleDeposit(event: Deposit): void {
  
  setDeposit(event.block,event.transaction.hash,event.params.txId,event.address)

}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}
