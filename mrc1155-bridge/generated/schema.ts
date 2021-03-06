// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class BridgeEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("blockNo", Value.fromBigInt(BigInt.zero()));
    this.set("txHash", Value.fromBytes(Bytes.empty()));
    this.set("blockHash", Value.fromBytes(Bytes.empty()));
    this.set("time", Value.fromBigInt(BigInt.zero()));
    this.set("txId", Value.fromBigInt(BigInt.zero()));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("fromChain", Value.fromBigInt(BigInt.zero()));
    this.set("toChain", Value.fromBigInt(BigInt.zero()));
    this.set("claimedChain", Value.fromBigInt(BigInt.zero()));
    this.set("user", Value.fromBytes(Bytes.empty()));
    this.set("itemIds", Value.fromBigIntArray(new Array(0)));
    this.set("amounts", Value.fromBigIntArray(new Array(0)));
    this.set("tokenAddress", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BridgeEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save BridgeEntity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("BridgeEntity", id.toString(), this);
    }
  }

  static load(id: string): BridgeEntity | null {
    return changetype<BridgeEntity | null>(store.get("BridgeEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get blockNo(): BigInt {
    let value = this.get("blockNo");
    return value!.toBigInt();
  }

  set blockNo(value: BigInt) {
    this.set("blockNo", Value.fromBigInt(value));
  }

  get txHash(): Bytes {
    let value = this.get("txHash");
    return value!.toBytes();
  }

  set txHash(value: Bytes) {
    this.set("txHash", Value.fromBytes(value));
  }

  get blockHash(): Bytes {
    let value = this.get("blockHash");
    return value!.toBytes();
  }

  set blockHash(value: Bytes) {
    this.set("blockHash", Value.fromBytes(value));
  }

  get time(): BigInt {
    let value = this.get("time");
    return value!.toBigInt();
  }

  set time(value: BigInt) {
    this.set("time", Value.fromBigInt(value));
  }

  get txId(): BigInt {
    let value = this.get("txId");
    return value!.toBigInt();
  }

  set txId(value: BigInt) {
    this.set("txId", Value.fromBigInt(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get fromChain(): BigInt {
    let value = this.get("fromChain");
    return value!.toBigInt();
  }

  set fromChain(value: BigInt) {
    this.set("fromChain", Value.fromBigInt(value));
  }

  get toChain(): BigInt {
    let value = this.get("toChain");
    return value!.toBigInt();
  }

  set toChain(value: BigInt) {
    this.set("toChain", Value.fromBigInt(value));
  }

  get claimedChain(): BigInt {
    let value = this.get("claimedChain");
    return value!.toBigInt();
  }

  set claimedChain(value: BigInt) {
    this.set("claimedChain", Value.fromBigInt(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value!.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get itemIds(): Array<BigInt> {
    let value = this.get("itemIds");
    return value!.toBigIntArray();
  }

  set itemIds(value: Array<BigInt>) {
    this.set("itemIds", Value.fromBigIntArray(value));
  }

  get amounts(): Array<BigInt> {
    let value = this.get("amounts");
    return value!.toBigIntArray();
  }

  set amounts(value: Array<BigInt>) {
    this.set("amounts", Value.fromBigIntArray(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value!.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get deposited(): boolean {
    let value = this.get("deposited");
    return value!.toBoolean();
  }

  set deposited(value: boolean) {
    this.set("deposited", Value.fromBoolean(value));
  }

  get claimed(): boolean {
    let value = this.get("claimed");
    return value!.toBoolean();
  }

  set claimed(value: boolean) {
    this.set("claimed", Value.fromBoolean(value));
  }
}

export class AddToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("tokenAddress", Value.fromBytes(Bytes.empty()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AddToken entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save AddToken entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("AddToken", id.toString(), this);
    }
  }

  static load(id: string): AddToken | null {
    return changetype<AddToken | null>(store.get("AddToken", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value!.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get mintable(): boolean {
    let value = this.get("mintable");
    return value!.toBoolean();
  }

  set mintable(value: boolean) {
    this.set("mintable", Value.fromBoolean(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }
}
