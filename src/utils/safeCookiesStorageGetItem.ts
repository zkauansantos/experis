'use client';

import { parseCookies } from 'nookies';

export function safeCookiesStorageGetItem<T>(key: string): T | null {
  try {
    const data = parseCookies();

    if (!data) {
      return null;
    }
    return JSON.parse(data[key]);
  } catch {
    return null;
  }
}
