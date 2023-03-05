import axios from 'axios';

const request = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
  timeout: 2000,
});

export const get = async (path, params = {}) => {
  const response = await request.get(path, params);
  return response.data;
};

export default request;
