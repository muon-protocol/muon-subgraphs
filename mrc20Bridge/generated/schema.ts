// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal,
  Address
} from "@graphprotocol/graph-ts";

export class DepositEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("blockNo", Value.fromBigInt(BigInt.zero()));
    this.set("txHash", Value.fromBytes(Bytes.empty()));
    this.set("blockHash", Value.fromBytes(Bytes.empty()));
    this.set("time", Value.fromBigInt(BigInt.zero()));
    this.set("txId", Value.fromBigInt(BigInt.zero()));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("toChain", Value.fromBigInt(BigInt.zero()));
    this.set("user", Value.fromBytes(Bytes.empty()));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DepositEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DepositEntity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DepositEntity", id.toString(), this);
    }
  }

  
  static load(id: string): DepositEntity | null {
    return changetype<DepositEntity | null>(store.get("DepositEntity", id));
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
    let value = this.get("txnHash");
    return value!.toBytes();
  }

  set txHash(value: Bytes) {
    this.set("txnHash", Value.fromBytes(value));
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

  get toChain(): BigInt {
    let value = this.get("toChain");
    return value!.toBigInt();
  }

  set toChain(value: BigInt) {
    this.set("toChain", Value.fromBigInt(value));
  }

  get user(): Address {
    let value = this.get("user");
    return value!.toBytes();
  }

  set user(value: Address) {
    this.set("user", Value.fromBytes(value));
  }

  get amount():BigInt{
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class ClaimEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("blockNo", Value.fromBigInt(BigInt.zero()));
    this.set("txHash", Value.fromBytes(Bytes.empty()));
    this.set("blockHash", Value.fromBytes(Bytes.empty()));
    this.set("time", Value.fromBigInt(BigInt.zero()));
    this.set("user", Value.fromBytes(Bytes.empty()));
    this.set("txId", Value.fromBigInt(BigInt.zero()));
    this.set("fromChain", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ClaimEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ClaimEntity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ClaimEntity", id.toString(), this);
    }
  }

  static load(id: string): ClaimEntity | null {
    return changetype<ClaimEntity | null>(store.get("ClaimEntity", id));
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
    let value = this.get("txnHash");
    return value!.toBytes();
  }

  set txHash(value: Bytes) {
    this.set("txnHash", Value.fromBytes(value));
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

  get user(): Bytes {
    let value = this.get("user");
    return value!.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get txId(): BigInt {
    let value = this.get("txId");
    return value!.toBigInt();
  }

  set txId(value: BigInt) {
    this.set("txId", Value.fromBigInt(value));
  }

  get fromChain(): BigInt {
    let value = this.get("fromChain");
    return value!.toBigInt();
  }

  set fromChain(value: BigInt) {
    this.set("fromChain", Value.fromBigInt(value));
  }
}