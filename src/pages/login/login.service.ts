import axios, { AxiosResponse } from 'axios';

const loginUser = (): Promise<AxiosResponse<any, any>> => {
  return axios.post('url', {});
};
const getPreLoginToken = (): Promise<AxiosResponse<any, any>> => {
  return axios.get('url');
};
const loginService = { loginUser, getPreLoginToken };
export default loginService;
