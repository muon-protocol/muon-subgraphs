import { BigInt, Address, ethereum, Bytes,log } from '@graphprotocol/graph-ts'
import { AddToken } from "../generated/schema"


export function setNewToken(tokenAddress:Address, tokenId:BigInt, mintable:boolean, blockNumber:BigInt):void{
    let entity = AddToken.load(tokenId.toString())
    if (!entity) {
        entity = new AddToken(tokenId.toString())
    }
    entity.tokenAddress = tokenAddress
    entity.tokenId = tokenId
    entity.mintable = mintable
    entity.blockNumber = blockNumber

    entity.save()
}
