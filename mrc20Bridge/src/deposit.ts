import { BigInt, Address, ethereum, Bytes,log } from '@graphprotocol/graph-ts'

import {
    MRC20Bridge,
 
  } from "../generated/MRC20Bridge/MRC20Bridge"
  import {  DepositEntity } from "../generated/schema"


export function setDeposit(id:string,block:ethereum.Block,txHash:Bytes,txId:BigInt,address:Address):void{
    let entity = DepositEntity.load(id)
    if (entity == null) {
      entity = new DepositEntity(id)
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
      entity.tokenId = tx.value.value1
      entity.toChain = tx.value.value4
      entity.user = tx.value.value5
      entity.amount = tx.value.value2
    } else {
      log.info("GetTx reverted", [])
    }
    entity.save()
}