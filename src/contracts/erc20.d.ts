/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractOptions, Options } from "web3-eth-contract";
import { Block } from "web3-eth";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import { Callback, TransactionObject } from "./types";

export class erc20 extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  methods: {
    balanceOf(_owner: string): TransactionObject<string>;

    allowance(_owner: string, _spender: string): TransactionObject<string>;

    approve(
      _spender: string,
      _value: number | string
    ): TransactionObject<boolean>;

    transferFrom(
      _from: string,
      _to: string,
      _value: number | string
    ): TransactionObject<boolean>;

    transfer(_to: string, _value: number | string): TransactionObject<boolean>;

    approveAndCall(
      _spender: string,
      _value: number | string,
      _extraData: (string | number[])[]
    ): TransactionObject<boolean>;

    name(): TransactionObject<string>;
    totalSupply(): TransactionObject<string>;
    decimals(): TransactionObject<string>;
    version(): TransactionObject<string>;
    symbol(): TransactionObject<string>;
  };
  events: {
    Transfer(
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    Approval(
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    allEvents: (
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
