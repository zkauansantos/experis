/* eslint-disable no-promise-executor-return */
/* eslint-disable no-return-await */
export async function sleep(time?: number) {
  return await new Promise((resolve) => setTimeout(resolve, time || 2000));
}
