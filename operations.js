/* @flow */
import * as I from "immutable";

export type GUID = string;

type AShape = {
  some: string,
  items: I.Map<GUID, ItemShape>,
};
type BShape = {
  different: string,
  item: I.Map<GUID, ItemShape>
};
type ItemShape = {
  defID: number,
};

export function updateItems<T: AShape | BShape>(
  target: T,
  ids: Array<GUID>,
  updater: (value: ItemShape) => ItemShape
) {
  return ids.reduce(
    (items, k) => items.update(k, updater),
    target.items
  );
}
