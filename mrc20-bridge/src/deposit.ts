import { BigInt, Address, ethereum, Bytes,log } from '@graphprotocol/graph-ts'

import { MRC20Bridge } from "../generated/MRC20Bridge/MRC20Bridge"
import {  BridgeEntity } from "../generated/schema"


export function setDeposit(
  block: ethereum.Block,
  txHash: Bytes,
  txId: BigInt,
  address: Address, 
  logIndex: BigInt
):void{
    let contract = MRC20Bridge.bind(address)
    let tx = contract.try_getTx(txId)
    let entity = new BridgeEntity(
      txHash.concatI32(logIndex.toI32())
    )
    entity.blockNo = block.number
    entity.txHash = txHash
    entity.blockHash = block.hash
    entity.time = block.timestamp
    entity.txId = txId

    if(!tx.reverted)
    {
      let tokenAddress = contract.try_tokens(tx.value.value1)

      entity.tokenId = tx.value.value1
      entity.amount = tx.value.value2
      entity.fromChain=tx.value.value3
      entity.toChain = tx.value.value4
      entity.user = tx.value.value5
      entity.tokenAddress = tokenAddress.value
      entity.deposited = true
      entity.claimed = false
    } else {
      log.info("GetTx reverted", [])
    }
    entity.save()
}