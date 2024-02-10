import { BigInt, Address, ethereum, Bytes } from '@graphprotocol/graph-ts'
import { BridgeEntity } from '../generated/schema'



export function setClaim(
      block: ethereum.Block, 
      txHash: Bytes,
      txId: BigInt, 
      user: Address, 
      fromChain:BigInt, 
      logIndex: BigInt
):void{

      let entity =  new BridgeEntity(
            txHash.concatI32(logIndex.toI32())
      )
      entity.blockNo = block.number
      entity.txHash = txHash
      entity.blockHash = block.hash
      entity.time = block.timestamp
      entity.user = user
      entity.txId =txId
      entity.claimedChain = fromChain
      entity.deposited = false
      entity.claimed = true
      entity.save()
 

}