import axios from 'axios';

import { sleep } from '@/utils/sleep';

if (!process.env.NEXT_PUBLIC_API_URL) {
  throw new Error('NEXT_PUBLIC_API_URL is not defined');
}

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? '',
});

httpClient.interceptors.response.use(async (config) => {
  await sleep(500);

  return config;
});
