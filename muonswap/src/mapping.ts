import { BigInt } from "@graphprotocol/graph-ts"
import {
  MuonSwapPair,
  Approval,
  Claim,
  Deposit,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Transfer
} from "../generated/MuonSwapPair/MuonSwapPair"
import { TxEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {

}

export function handleClaim(event: Claim): void {
  let entity = TxEntity.load(event.params.txId.toString())
  if (!entity) {
    return
  }
  let muonSwapContract = MuonSwapPair.bind(event.address)
  const totalSupply = muonSwapContract.try_totalSupply()
  if (!totalSupply.reverted) {
    entity.totalSupply = totalSupply.value
  }

  entity.claim_tx = event.transaction.hash
  let txs = muonSwapContract.try_txs(event.params.txId)
  if (!txs.reverted) {
    entity.txId = txs.value.value0
    entity.amount0 = txs.value.value1
    entity.amount1 = txs.value.value2
    entity.amount0Min = txs.value.value3
    entity.amount1Min = txs.value.value4
    entity.addr = txs.value.value5
    entity.claimed = txs.value.value6
    entity._type = txs.value.value7
    // entity.time = event.block.timestamp
  }

  entity.save()
}

export function handleDeposit(event: Deposit): void {
  let entity = new TxEntity(event.params.txId.toString())


  let muonSwapContract = MuonSwapPair.bind(event.address)
  const totalSupply = muonSwapContract.try_totalSupply()
  if (!totalSupply.reverted) {
    entity.totalSupply = totalSupply.value
  }
  entity.deposit_tx = event.transaction.hash
  let txs = muonSwapContract.try_txs(event.params.txId)
  if (!txs.reverted) {
    // entity.txId = BigInt.fromString(event.params.txId.toString())
    entity.txId = txs.value.value0
    entity.amount0 = txs.value.value1
    entity.amount1 = txs.value.value2
    entity.amount0Min = txs.value.value3
    entity.amount1Min = txs.value.value4
    entity.addr = txs.value.value5
    entity.claimed = txs.value.value6
    entity._type = txs.value.value7
    entity.time = event.block.timestamp
  }

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleTransfer(event: Transfer): void {}
