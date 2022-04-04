import { BigInt, Address, ethereum, Bytes } from '@graphprotocol/graph-ts'
import { BridgeEntity } from '../generated/schema'



export function setClaim(block:ethereum.Block,txHash:Bytes,txId:BigInt,user:Address,fromChain:BigInt):void{
     let entity = BridgeEntity.load(txId.toString())
     if (entity == null) {
      entity = new BridgeEntity(txId.toString())
    }
      entity.blockNo = block.number
      entity.txHash = txHash
      entity.blockHash = block.hash
      entity.time = block.timestamp
      entity.user = user
      entity.txId =txId
      entity.fromChain = fromChain
      entity.deposited = false
      entity.claimed = true
      entity.save()
 

}