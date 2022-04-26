import {
  Claim,
  Deposit,
  AddToken
} from "../generated/MRC1155Bridge/MRC1155Bridge"
import { setClaim } from "./claim"
import { setDeposit } from "./deposit"
import { setNewToken } from "./addToken"


export function handleClaim(event: Claim): void {
  
  setClaim(event.block,event.transaction.hash,event.params.txId,event.params.user,event.params.fromChain)
}

export function handleDeposit(event: Deposit): void {
  
  setDeposit(event.block,event.transaction.hash,event.params.txId,event.address)

}

export function handleAddToken(event: AddToken): void {

  setNewToken(
    event.params.addr.toHex(),
    event.params.tokenId,
    event.params.mintable,
    event.block.number
    )

}

