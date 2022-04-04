import { BigInt, Address, ethereum, Bytes,log } from '@graphprotocol/graph-ts'

import {MRC20Bridge} from "../generated/MRC20Bridge/MRC20Bridge"
import {  BridgeEntity } from "../generated/schema"


export function setDeposit(block:ethereum.Block,txHash:Bytes,txId:BigInt,address:Address):void{
    let entity = BridgeEntity.load(txId.toString())
    if (entity == null) {
      entity = new BridgeEntity(txId.toString())
    }
    entity.blockNo = block.number
    entity.txHash = txHash
    entity.blockHash = block.hash
    entity.time = block.timestamp
    entity.txId = txId
    let contract = MRC20Bridge.bind(address)
    let tx = contract.try_getTx(txId)
    if(!tx.reverted)
    {
      let tokenAddress = contract.try_tokens(tx.value.value1)

      entity.tokenId = tx.value.value1
      entity.fromChain=tx.value.value3
      entity.toChain = tx.value.value4
      entity.user = tx.value.value5
      entity.amount = tx.value.value2
      entity.tokenAddress = tokenAddress.value
      entity.deposited = true
      entity.claimed = false
    } else {
      log.info("GetTx reverted", [])
    }
    entity.save()
}