/* @flow */

import * as I from "immutable";

/**
 * Define an immutable record
 * @param  spec - the keys and their default values
 * @return a state record factory function
 */
export function defineRecord<T: Object>(
  name: string,
  spec: T
): (init: $Shape<T>) => Record<T> {
  return I.Record(spec, name);
}

export type Record<T: Object> = T;
