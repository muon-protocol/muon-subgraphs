import { BigInt, Address, ethereum, Bytes,log } from '@graphprotocol/graph-ts'
import { AddToken } from "../generated/schema"


export function setNewToken(tokenAddress:string, tokenId:BigInt, mintable:boolean, blockNumber:BigInt):void{
    let entity = new AddToken(tokenAddress)
    entity.tokenId = tokenId
    entity.mintable = mintable
    entity.blockNumber = blockNumber

    entity.save()
}
