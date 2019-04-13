/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractOptions, Options } from "web3-eth-contract";
import { Block } from "web3-eth";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import { Callback, TransactionObject } from "./types";

export class weth extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  methods: {
    balanceOf(arg0: string): TransactionObject<string>;

    allowance(arg0: string, arg1: string): TransactionObject<string>;

    approve(guy: string, wad: number | string): TransactionObject<boolean>;

    transferFrom(
      src: string,
      dst: string,
      wad: number | string
    ): TransactionObject<boolean>;

    withdraw(wad: number | string): TransactionObject<void>;

    transfer(dst: string, wad: number | string): TransactionObject<boolean>;

    deposit(): TransactionObject<void>;

    name(): TransactionObject<string>;
    totalSupply(): TransactionObject<string>;
    decimals(): TransactionObject<string>;
    symbol(): TransactionObject<string>;
  };
  events: {
    Approval(
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    Transfer(
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    Deposit(
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    Withdrawal(
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
