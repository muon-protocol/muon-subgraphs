import { BigInt, Address, ethereum, Bytes } from '@graphprotocol/graph-ts'
import { DepositEntity } from '../generated/schema'



export function setClaim(id:string,block:ethereum.Block,txHash:Bytes,txId:BigInt,user:Address,fromChain:BigInt):void{
    let entity = DepositEntity.load(id)
    if (entity == null) {
      entity = new DepositEntity(id)
    }
    entity.blockNo = block.number
    entity.txHash = txHash
    entity.blockHash = block.hash
    entity.time = block.timestamp
    entity.user = user
    entity.txId = txId
    entity.fromChain = fromChain
    entity.deposited = false
    entity.claimed = true
    entity.save()
}