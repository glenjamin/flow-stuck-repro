/* @flow */

import type {GUID, ARecord, BRecord, ItemRecord} from "./types";

export function updateItems<T: ARecord | BRecord>(
  target: T,
  ids: Array<GUID>,
  updater: (value: ItemRecord) => ItemRecord
): T {
  return target.merge({
    items: ids.reduce(
      (items, k) => items.has(k) ? items.update(k, updater) : items,
      target.items
    )
  });
}
