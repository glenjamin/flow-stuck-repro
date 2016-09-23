/* @flow */
import * as I from "immutable";

export type GUID = string;

type AShape = {
  some: string,
  items: I.Map<GUID, ItemShape>,
};
export type ARecord = AShape;

type BShape = {
  different: string,
  items: I.Map<GUID, ItemShape>
};
export type BRecord = BShape;

type ItemShape = {
  defID: number,
};
export type ItemRecord = ItemShape;
