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

export class Vault extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("totalSwapCount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Vault entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Vault entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Vault", id.toString(), this);
    }
  }

  static load(id: string): Vault | null {
    return changetype<Vault | null>(store.get("Vault", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalSwapCount(): BigInt {
    let value = this.get("totalSwapCount");
    return value!.toBigInt();
  }

  set totalSwapCount(value: BigInt) {
    this.set("totalSwapCount", Value.fromBigInt(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("symbol", Value.fromString(""));
    this.set("name", Value.fromString(""));
    this.set("decimals", Value.fromBigInt(BigInt.zero()));
    this.set("totalSupply", Value.fromBigInt(BigInt.zero()));
    this.set("totalLiquidity", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Token entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get decimals(): BigInt {
    let value = this.get("decimals");
    return value!.toBigInt();
  }

  set decimals(value: BigInt) {
    this.set("decimals", Value.fromBigInt(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value!.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get totalLiquidity(): BigDecimal {
    let value = this.get("totalLiquidity");
    return value!.toBigDecimal();
  }

  set totalLiquidity(value: BigDecimal) {
    this.set("totalLiquidity", Value.fromBigDecimal(value));
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transaction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Transaction entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Transaction", id.toString(), this);
    }
  }

  static load(id: string): Transaction | null {
    return changetype<Transaction | null>(store.get("Transaction", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Swap extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("transaction", Value.fromString(""));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("poolId", Value.fromBytes(Bytes.empty()));
    this.set("from", Value.fromBytes(Bytes.empty()));
    this.set("tokenIn", Value.fromString(""));
    this.set("tokenOut", Value.fromString(""));
    this.set("tokenAmountIn", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("tokenAmountOut", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("logIndex", Value.fromBigInt(BigInt.zero()));
    this.set("poolTokenBalances", Value.fromBigIntArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Swap entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Swap entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Swap", id.toString(), this);
    }
  }

  static load(id: string): Swap | null {
    return changetype<Swap | null>(store.get("Swap", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get poolId(): Bytes {
    let value = this.get("poolId");
    return value!.toBytes();
  }

  set poolId(value: Bytes) {
    this.set("poolId", Value.fromBytes(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get tokenIn(): string {
    let value = this.get("tokenIn");
    return value!.toString();
  }

  set tokenIn(value: string) {
    this.set("tokenIn", Value.fromString(value));
  }

  get tokenOut(): string {
    let value = this.get("tokenOut");
    return value!.toString();
  }

  set tokenOut(value: string) {
    this.set("tokenOut", Value.fromString(value));
  }

  get tokenAmountIn(): BigDecimal {
    let value = this.get("tokenAmountIn");
    return value!.toBigDecimal();
  }

  set tokenAmountIn(value: BigDecimal) {
    this.set("tokenAmountIn", Value.fromBigDecimal(value));
  }

  get tokenAmountOut(): BigDecimal {
    let value = this.get("tokenAmountOut");
    return value!.toBigDecimal();
  }

  set tokenAmountOut(value: BigDecimal) {
    this.set("tokenAmountOut", Value.fromBigDecimal(value));
  }

  get logIndex(): BigInt {
    let value = this.get("logIndex");
    return value!.toBigInt();
  }

  set logIndex(value: BigInt) {
    this.set("logIndex", Value.fromBigInt(value));
  }

  get poolTokenBalances(): Array<BigInt> {
    let value = this.get("poolTokenBalances");
    return value!.toBigIntArray();
  }

  set poolTokenBalances(value: Array<BigInt>) {
    this.set("poolTokenBalances", Value.fromBigIntArray(value));
  }
}
