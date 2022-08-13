import { AxiosResponse, AxiosError } from 'axios';


export const parseList = <T>(response: AxiosResponse<T>): T | [] => {
  if (response.status !== 200) throw Error((response as unknown as AxiosError).message);
  return response.data ?? [];
};

export const parseItem = <T>(response: AxiosResponse<T>, code: number): T => {
  if (response.status !== code) throw Error((response as unknown as AxiosError).message);
  return response.data;
};
