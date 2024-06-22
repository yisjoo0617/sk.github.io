import type DateTime from './DateTime';
import Adapter from './DayJsAdapter';

const instance: DateTime = new Adapter();

export function format(date: Date | string, dateFormat: string): String {
  return instance.format(date, dateFormat);
}
