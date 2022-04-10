import { BigInt, log } from "@graphprotocol/graph-ts"
import {
  MRC721Bridge,
  Claim,
  Deposit
} from "../generated/MRC721Bridge/MRC721Bridge"
import { ClaimEntity, DepositEntity } from "../generated/schema"

export function handleClaim(event: Claim): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let entity = ClaimEntity.load(id)
  if (entity == null) {
    entity = new ClaimEntity(id)
  }
  entity.blockNo = event.block.number
  entity.txnHash = event.transaction.hash
  entity.blockHash = event.block.hash
  entity.time = event.block.timestamp
  entity.user = event.params.user
  entity.txId = event.params.txId
  entity.fromChain = event.params.fromChain
  entity.save()
}

export function handleDeposit(event: Deposit): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let entity = DepositEntity.load(id)
  if (entity == null) {
    entity = new DepositEntity(id)
  }
  entity.blockNo = event.block.number
  entity.txnHash = event.transaction.hash
  entity.blockHash = event.block.hash
  entity.time = event.block.timestamp
  entity.txId = event.params.txId
  let contract = MRC721Bridge.bind(event.address)
  let tx = contract.try_getTx(event.params.txId)
  if(!tx.reverted)
  {
    entity.tokenId = tx.value.value1
    entity.toChain = tx.value.value3
    entity.user = tx.value.value4
    entity.nftIds = tx.value.value7
  } else {
    log.info("GetTx reverted", [])
  }
  entity.save()
}
