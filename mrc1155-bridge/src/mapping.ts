import { BigInt, log } from "@graphprotocol/graph-ts"
import {
  MRC1155Bridge,
  Claim,
  Deposit
} from "../generated/MRC1155Bridge/MRC1155Bridge"
import { ClaimEntity, DepositEntity } from "../generated/schema"

export function handleClaim(event: Claim): void {
  log.info("Claim event", [])
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
  log.info("Deposit event", [])
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
  let contract = MRC1155Bridge.bind(event.address)
  log.info("txId: {}", [event.params.txId.toString()])
  let tx = contract.try_getTx(event.params.txId)
  if(!tx.reverted)
  {
    entity.tokenId = tx.value.value1
    entity.toChain = tx.value.value3
    entity.user = tx.value.value4
    entity.itemIds = tx.value.value6
    entity.amounts = tx.value.value7
  } else {
    log.error("GetTx {} reverted", [event.params.txId.toString()])
  }
  entity.save()
}
