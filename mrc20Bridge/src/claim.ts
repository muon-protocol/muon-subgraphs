import { BigInt, Address, ethereum, Bytes } from '@graphprotocol/graph-ts'

import {  ClaimEntity } from "../generated/schema"


export function setClaim(id:string,block:ethereum.Block,txHash:Bytes,txId:BigInt,user:Address,fromChain:BigInt):void{
    let entity = ClaimEntity.load(id)
    if (entity == null) {
      entity = new ClaimEntity(id)
    }
    entity.blockNo = block.number
    entity.txHash = txHash
    entity.blockHash = block.hash
    entity.time = block.timestamp
    entity.user = user
    entity.txId = txId
    entity.fromChain = fromChain
    entity.save()
}