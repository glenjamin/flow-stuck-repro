/* @flow */
import * as I from "immutable";

import {defineRecord} from "./records";
import type {Record} from "./records";

export type GUID = string;

type AShape = {
  some: string,
  items: I.Map<GUID, ItemRecord>,
};
export type ARecord = Record<AShape>;

export const A = defineRecord("A", ({
  some: "",
  items: I.OrderedMap(),
}: AShape));

type BShape = {
  different: string,
  items: I.Map<GUID, ItemRecord>
};
export type BRecord = Record<BShape>;

export const B = defineRecord("B", ({
  different: "",
  items: I.OrderedMap(),
}: BShape));

type ItemShape = {
  defID: number,
};
export type ItemRecord = Record<ItemShape>;

export const Item = defineRecord("Item", ({
  defID: 0,
}: ItemShape));
