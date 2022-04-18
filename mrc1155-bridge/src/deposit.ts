import { BigInt, Address, ethereum, Bytes,log } from '@graphprotocol/graph-ts'

import {MRC1155Bridge} from "../generated/MRC1155Bridge/MRC1155Bridge"
import {  BridgeEntity } from "../generated/schema"


export function setDeposit(block:ethereum.Block,txHash:Bytes,txId:BigInt,address:Address):void{
    let contract = MRC1155Bridge.bind(address)
    let tx = contract.try_getTx(txId)
    let entity = new BridgeEntity(txId.toString().concat(':').concat(tx.value.value2.toString()))
    entity.blockNo = block.number
    entity.txHash = txHash
    entity.blockHash = block.hash
    entity.time = block.timestamp
    entity.txId = txId

    if(!tx.reverted)
    {
      entity.tokenId = tx.value.value1
      entity.fromChain=tx.value.value2
      entity.toChain = tx.value.value3
      entity.user = tx.value.value4
      entity.tokenAddress = tx.value.value5
      entity.itemIds=tx.value.value6
      entity.amounts = tx.value.value7
      entity.deposited = true
      entity.claimed = false
    } else {
      log.info("GetTx reverted", [])
    }
    entity.save()
}

