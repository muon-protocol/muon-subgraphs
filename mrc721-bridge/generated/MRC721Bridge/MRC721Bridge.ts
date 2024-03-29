// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class AddToken extends ethereum.Event {
  get params(): AddToken__Params {
    return new AddToken__Params(this);
  }
}

export class AddToken__Params {
  _event: AddToken;

  constructor(event: AddToken) {
    this._event = event;
  }

  get addr(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Claim extends ethereum.Event {
  get params(): Claim__Params {
    return new Claim__Params(this);
  }
}

export class Claim__Params {
  _event: Claim;

  constructor(event: Claim) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get txId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get fromChain(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get txId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class MRC721Bridge__getTxResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: Address;
  value5: Address;
  value6: Array<BigInt>;
  value7: Bytes;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: Address,
    value5: Address,
    value6: Array<BigInt>,
    value7: Bytes,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigIntArray(this.value6));
    map.set("value7", ethereum.Value.fromBytes(this.value7));
    return map;
  }

  getTxId(): BigInt {
    return this.value0;
  }

  getTokenId(): BigInt {
    return this.value1;
  }

  getFromChain(): BigInt {
    return this.value2;
  }

  getToChain(): BigInt {
    return this.value3;
  }

  getUser(): Address {
    return this.value4;
  }

  getNftContract(): Address {
    return this.value5;
  }

  getNftIds(): Array<BigInt> {
    return this.value6;
  }

  getNftData(): Bytes {
    return this.value7;
  }
}

export class MRC721Bridge__muonPublicKeyResult {
  value0: BigInt;
  value1: i32;

  constructor(value0: BigInt, value1: i32) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1)),
    );
    return map;
  }

  getX(): BigInt {
    return this.value0;
  }

  getParity(): i32 {
    return this.value1;
  }
}

export class MRC721Bridge__txsResult {
  value0: BigInt;
  value1: BigInt;
  value2: Address;
  value3: Bytes;

  constructor(value0: BigInt, value1: BigInt, value2: Address, value3: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromBytes(this.value3));
    return map;
  }

  getTokenId(): BigInt {
    return this.value0;
  }

  getToChain(): BigInt {
    return this.value1;
  }

  getUser(): Address {
    return this.value2;
  }

  getNftData(): Bytes {
    return this.value3;
  }
}

export class MRC721Bridge extends ethereum.SmartContract {
  static bind(address: Address): MRC721Bridge {
    return new MRC721Bridge("MRC721Bridge", address);
  }

  ADMIN_ROLE(): Bytes {
    let result = super.call("ADMIN_ROLE", "ADMIN_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("ADMIN_ROLE", "ADMIN_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  TOKEN_ADDER_ROLE(): Bytes {
    let result = super.call(
      "TOKEN_ADDER_ROLE",
      "TOKEN_ADDER_ROLE():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_TOKEN_ADDER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "TOKEN_ADDER_ROLE",
      "TOKEN_ADDER_ROLE():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  _ERC721_RECEIVED(): Bytes {
    let result = super.call(
      "_ERC721_RECEIVED",
      "_ERC721_RECEIVED():(bytes4)",
      [],
    );

    return result[0].toBytes();
  }

  try__ERC721_RECEIVED(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "_ERC721_RECEIVED",
      "_ERC721_RECEIVED():(bytes4)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  claimedTxs(param0: BigInt, param1: BigInt): boolean {
    let result = super.call(
      "claimedTxs",
      "claimedTxs(uint256,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1),
      ],
    );

    return result[0].toBoolean();
  }

  try_claimedTxs(param0: BigInt, param1: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "claimedTxs",
      "claimedTxs(uint256,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  deposit(nftId: Array<BigInt>, toChain: BigInt, tokenId: BigInt): BigInt {
    let result = super.call(
      "deposit",
      "deposit(uint256[],uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigIntArray(nftId),
        ethereum.Value.fromUnsignedBigInt(toChain),
        ethereum.Value.fromUnsignedBigInt(tokenId),
      ],
    );

    return result[0].toBigInt();
  }

  try_deposit(
    nftId: Array<BigInt>,
    toChain: BigInt,
    tokenId: BigInt,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "deposit",
      "deposit(uint256[],uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigIntArray(nftId),
        ethereum.Value.fromUnsignedBigInt(toChain),
        ethereum.Value.fromUnsignedBigInt(tokenId),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCurrentChainID(): BigInt {
    let result = super.call(
      "getCurrentChainID",
      "getCurrentChainID():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_getCurrentChainID(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCurrentChainID",
      "getCurrentChainID():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role),
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getTokenId(_addr: Address): BigInt {
    let result = super.call("getTokenId", "getTokenId(address):(uint256)", [
      ethereum.Value.fromAddress(_addr),
    ]);

    return result[0].toBigInt();
  }

  try_getTokenId(_addr: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getTokenId", "getTokenId(address):(uint256)", [
      ethereum.Value.fromAddress(_addr),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTx(_txId: BigInt): MRC721Bridge__getTxResult {
    let result = super.call(
      "getTx",
      "getTx(uint256):(uint256,uint256,uint256,uint256,address,address,uint256[],bytes)",
      [ethereum.Value.fromUnsignedBigInt(_txId)],
    );

    return new MRC721Bridge__getTxResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toAddress(),
      result[5].toAddress(),
      result[6].toBigIntArray(),
      result[7].toBytes(),
    );
  }

  try_getTx(_txId: BigInt): ethereum.CallResult<MRC721Bridge__getTxResult> {
    let result = super.tryCall(
      "getTx",
      "getTx(uint256):(uint256,uint256,uint256,uint256,address,address,uint256[],bytes)",
      [ethereum.Value.fromUnsignedBigInt(_txId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MRC721Bridge__getTxResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toAddress(),
        value[5].toAddress(),
        value[6].toBigIntArray(),
        value[7].toBytes(),
      ),
    );
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account),
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  ids(param0: Address): BigInt {
    let result = super.call("ids", "ids(address):(uint256)", [
      ethereum.Value.fromAddress(param0),
    ]);

    return result[0].toBigInt();
  }

  try_ids(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("ids", "ids(address):(uint256)", [
      ethereum.Value.fromAddress(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lastTxId(): BigInt {
    let result = super.call("lastTxId", "lastTxId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lastTxId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("lastTxId", "lastTxId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  muon(): Address {
    let result = super.call("muon", "muon():(address)", []);

    return result[0].toAddress();
  }

  try_muon(): ethereum.CallResult<Address> {
    let result = super.tryCall("muon", "muon():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  muonAppId(): BigInt {
    let result = super.call("muonAppId", "muonAppId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_muonAppId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("muonAppId", "muonAppId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  muonPublicKey(): MRC721Bridge__muonPublicKeyResult {
    let result = super.call(
      "muonPublicKey",
      "muonPublicKey():(uint256,uint8)",
      [],
    );

    return new MRC721Bridge__muonPublicKeyResult(
      result[0].toBigInt(),
      result[1].toI32(),
    );
  }

  try_muonPublicKey(): ethereum.CallResult<MRC721Bridge__muonPublicKeyResult> {
    let result = super.tryCall(
      "muonPublicKey",
      "muonPublicKey():(uint256,uint8)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MRC721Bridge__muonPublicKeyResult(
        value[0].toBigInt(),
        value[1].toI32(),
      ),
    );
  }

  muonValidGateway(): Address {
    let result = super.call(
      "muonValidGateway",
      "muonValidGateway():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_muonValidGateway(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "muonValidGateway",
      "muonValidGateway():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  network(): BigInt {
    let result = super.call("network", "network():(uint256)", []);

    return result[0].toBigInt();
  }

  try_network(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("network", "network():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes,
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3),
      ],
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes,
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  pendingTxs(fromChain: BigInt, _ids: Array<BigInt>): Array<boolean> {
    let result = super.call(
      "pendingTxs",
      "pendingTxs(uint256,uint256[]):(bool[])",
      [
        ethereum.Value.fromUnsignedBigInt(fromChain),
        ethereum.Value.fromUnsignedBigIntArray(_ids),
      ],
    );

    return result[0].toBooleanArray();
  }

  try_pendingTxs(
    fromChain: BigInt,
    _ids: Array<BigInt>,
  ): ethereum.CallResult<Array<boolean>> {
    let result = super.tryCall(
      "pendingTxs",
      "pendingTxs(uint256,uint256[]):(bool[])",
      [
        ethereum.Value.fromUnsignedBigInt(fromChain),
        ethereum.Value.fromUnsignedBigIntArray(_ids),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBooleanArray());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)],
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  tokens(param0: BigInt): Address {
    let result = super.call("tokens", "tokens(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);

    return result[0].toAddress();
  }

  try_tokens(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("tokens", "tokens(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  txs(param0: BigInt): MRC721Bridge__txsResult {
    let result = super.call(
      "txs",
      "txs(uint256):(uint256,uint256,address,bytes)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return new MRC721Bridge__txsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toBytes(),
    );
  }

  try_txs(param0: BigInt): ethereum.CallResult<MRC721Bridge__txsResult> {
    let result = super.tryCall(
      "txs",
      "txs(uint256):(uint256,uint256,address,bytes)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MRC721Bridge__txsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toBytes(),
      ),
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _muonAppId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _muonPublicKey(): ConstructorCall_muonPublicKeyStruct {
    return changetype<ConstructorCall_muonPublicKeyStruct>(
      this._call.inputValues[1].value.toTuple(),
    );
  }

  get _muon(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall_muonPublicKeyStruct extends ethereum.Tuple {
  get x(): BigInt {
    return this[0].toBigInt();
  }

  get parity(): i32 {
    return this[1].toI32();
  }
}

export class AddTokenCall extends ethereum.Call {
  get inputs(): AddTokenCall__Inputs {
    return new AddTokenCall__Inputs(this);
  }

  get outputs(): AddTokenCall__Outputs {
    return new AddTokenCall__Outputs(this);
  }
}

export class AddTokenCall__Inputs {
  _call: AddTokenCall;

  constructor(call: AddTokenCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AddTokenCall__Outputs {
  _call: AddTokenCall;

  constructor(call: AddTokenCall) {
    this._call = call;
  }
}

export class AdminWithdrawTokensCall extends ethereum.Call {
  get inputs(): AdminWithdrawTokensCall__Inputs {
    return new AdminWithdrawTokensCall__Inputs(this);
  }

  get outputs(): AdminWithdrawTokensCall__Outputs {
    return new AdminWithdrawTokensCall__Outputs(this);
  }
}

export class AdminWithdrawTokensCall__Inputs {
  _call: AdminWithdrawTokensCall;

  constructor(call: AdminWithdrawTokensCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class AdminWithdrawTokensCall__Outputs {
  _call: AdminWithdrawTokensCall;

  constructor(call: AdminWithdrawTokensCall) {
    this._call = call;
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }

  get params(): ClaimCallParamsStruct {
    return changetype<ClaimCallParamsStruct>(
      this._call.inputValues[0].value.toTuple(),
    );
  }

  get nftData(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get reqId(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get signature(): ClaimCallSignatureStruct {
    return changetype<ClaimCallSignatureStruct>(
      this._call.inputValues[3].value.toTuple(),
    );
  }

  get gatewaySignature(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class ClaimCallParamsStruct extends ethereum.Tuple {
  get user(): Address {
    return this[0].toAddress();
  }

  get nftIds(): Array<BigInt> {
    return this[1].toBigIntArray();
  }

  get fromChain(): BigInt {
    return this[2].toBigInt();
  }

  get toChain(): BigInt {
    return this[3].toBigInt();
  }

  get tokenId(): BigInt {
    return this[4].toBigInt();
  }

  get txId(): BigInt {
    return this[5].toBigInt();
  }
}

export class ClaimCallSignatureStruct extends ethereum.Tuple {
  get signature(): BigInt {
    return this[0].toBigInt();
  }

  get owner(): Address {
    return this[1].toAddress();
  }

  get nonce(): Address {
    return this[2].toAddress();
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get nftId(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get toChain(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class DepositForCall extends ethereum.Call {
  get inputs(): DepositForCall__Inputs {
    return new DepositForCall__Inputs(this);
  }

  get outputs(): DepositForCall__Outputs {
    return new DepositForCall__Outputs(this);
  }
}

export class DepositForCall__Inputs {
  _call: DepositForCall;

  constructor(call: DepositForCall) {
    this._call = call;
  }

  get user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get nftIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get toChain(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class DepositForCall__Outputs {
  _call: DepositForCall;

  constructor(call: DepositForCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class EmergencyWithdrawERC721TokensCall extends ethereum.Call {
  get inputs(): EmergencyWithdrawERC721TokensCall__Inputs {
    return new EmergencyWithdrawERC721TokensCall__Inputs(this);
  }

  get outputs(): EmergencyWithdrawERC721TokensCall__Outputs {
    return new EmergencyWithdrawERC721TokensCall__Outputs(this);
  }
}

export class EmergencyWithdrawERC721TokensCall__Inputs {
  _call: EmergencyWithdrawERC721TokensCall;

  constructor(call: EmergencyWithdrawERC721TokensCall) {
    this._call = call;
  }

  get _tokenAddr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class EmergencyWithdrawERC721TokensCall__Outputs {
  _call: EmergencyWithdrawERC721TokensCall;

  constructor(call: EmergencyWithdrawERC721TokensCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class RemoveTokenCall extends ethereum.Call {
  get inputs(): RemoveTokenCall__Inputs {
    return new RemoveTokenCall__Inputs(this);
  }

  get outputs(): RemoveTokenCall__Outputs {
    return new RemoveTokenCall__Outputs(this);
  }
}

export class RemoveTokenCall__Inputs {
  _call: RemoveTokenCall;

  constructor(call: RemoveTokenCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RemoveTokenCall__Outputs {
  _call: RemoveTokenCall;

  constructor(call: RemoveTokenCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get callerConfirmation(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class SetMuonAppIdCall extends ethereum.Call {
  get inputs(): SetMuonAppIdCall__Inputs {
    return new SetMuonAppIdCall__Inputs(this);
  }

  get outputs(): SetMuonAppIdCall__Outputs {
    return new SetMuonAppIdCall__Outputs(this);
  }
}

export class SetMuonAppIdCall__Inputs {
  _call: SetMuonAppIdCall;

  constructor(call: SetMuonAppIdCall) {
    this._call = call;
  }

  get _muonAppId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMuonAppIdCall__Outputs {
  _call: SetMuonAppIdCall;

  constructor(call: SetMuonAppIdCall) {
    this._call = call;
  }
}

export class SetMuonContractCall extends ethereum.Call {
  get inputs(): SetMuonContractCall__Inputs {
    return new SetMuonContractCall__Inputs(this);
  }

  get outputs(): SetMuonContractCall__Outputs {
    return new SetMuonContractCall__Outputs(this);
  }
}

export class SetMuonContractCall__Inputs {
  _call: SetMuonContractCall;

  constructor(call: SetMuonContractCall) {
    this._call = call;
  }

  get _addr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetMuonContractCall__Outputs {
  _call: SetMuonContractCall;

  constructor(call: SetMuonContractCall) {
    this._call = call;
  }
}

export class SetMuonGatewayCall extends ethereum.Call {
  get inputs(): SetMuonGatewayCall__Inputs {
    return new SetMuonGatewayCall__Inputs(this);
  }

  get outputs(): SetMuonGatewayCall__Outputs {
    return new SetMuonGatewayCall__Outputs(this);
  }
}

export class SetMuonGatewayCall__Inputs {
  _call: SetMuonGatewayCall;

  constructor(call: SetMuonGatewayCall) {
    this._call = call;
  }

  get _gatewayAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetMuonGatewayCall__Outputs {
  _call: SetMuonGatewayCall;

  constructor(call: SetMuonGatewayCall) {
    this._call = call;
  }
}

export class SetMuonPubKeyCall extends ethereum.Call {
  get inputs(): SetMuonPubKeyCall__Inputs {
    return new SetMuonPubKeyCall__Inputs(this);
  }

  get outputs(): SetMuonPubKeyCall__Outputs {
    return new SetMuonPubKeyCall__Outputs(this);
  }
}

export class SetMuonPubKeyCall__Inputs {
  _call: SetMuonPubKeyCall;

  constructor(call: SetMuonPubKeyCall) {
    this._call = call;
  }

  get _muonPublicKey(): SetMuonPubKeyCall_muonPublicKeyStruct {
    return changetype<SetMuonPubKeyCall_muonPublicKeyStruct>(
      this._call.inputValues[0].value.toTuple(),
    );
  }
}

export class SetMuonPubKeyCall__Outputs {
  _call: SetMuonPubKeyCall;

  constructor(call: SetMuonPubKeyCall) {
    this._call = call;
  }
}

export class SetMuonPubKeyCall_muonPublicKeyStruct extends ethereum.Tuple {
  get x(): BigInt {
    return this[0].toBigInt();
  }

  get parity(): i32 {
    return this[1].toI32();
  }
}

export class SetNetworkIDCall extends ethereum.Call {
  get inputs(): SetNetworkIDCall__Inputs {
    return new SetNetworkIDCall__Inputs(this);
  }

  get outputs(): SetNetworkIDCall__Outputs {
    return new SetNetworkIDCall__Outputs(this);
  }
}

export class SetNetworkIDCall__Inputs {
  _call: SetNetworkIDCall;

  constructor(call: SetNetworkIDCall) {
    this._call = call;
  }

  get _network(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetNetworkIDCall__Outputs {
  _call: SetNetworkIDCall;

  constructor(call: SetNetworkIDCall) {
    this._call = call;
  }
}
