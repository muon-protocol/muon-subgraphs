import { BigInt, log } from "@graphprotocol/graph-ts"
import {
  MRC1155Bridge,
  Claim,
  Deposit
} from "../generated/MRC1155Bridge/MRC1155Bridge"
import { setClaim } from "./claim"
import { setDeposit } from "./deposit"


export function handleClaim(event: Claim): void {
  
  setClaim(event.block,event.transaction.hash,event.params.txId,event.params.user,event.params.fromChain)
}

export function handleDeposit(event: Deposit): void {
  
  setDeposit(event.block,event.transaction.hash,event.params.txId,event.address)

}


