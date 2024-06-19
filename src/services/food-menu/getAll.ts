import { httpClient } from '@/services/httpClient';

export default async function getAll() {
  const { data } = await httpClient.get('/menu');

  return data;
}
