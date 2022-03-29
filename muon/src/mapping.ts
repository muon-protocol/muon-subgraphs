import { BigInt } from "@graphprotocol/graph-ts"
import {
  MuonV02,
  Transaction
} from "../generated/MuonV02/MuonV02"
import { TransactionEntity, TransactionsCountEntity } from "../generated/schema"

export function handleTransaction(event: Transaction): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let entity = TransactionEntity.load(id)
  let newEntity = false
  if (entity == null) {
    entity = new TransactionEntity(id)
    newEntity = true
  }
  entity.blockNo = event.block.number
  entity.txnHash = event.transaction.hash
  entity.blockHash = event.block.hash
  entity.time = event.block.timestamp
  entity.save()

  if(newEntity)
  {
    let countEntity = TransactionsCountEntity.load('1')
    let prevCount = 0
    if (countEntity == null) {
      countEntity = new TransactionsCountEntity('1')
    }else
    {
      prevCount = countEntity.count
    }
    countEntity.count = prevCount + 1
    countEntity.save()
  }

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.groupsPubKey(...)
  // - contract.owner(...)
  // - contract.verify(...)
}
