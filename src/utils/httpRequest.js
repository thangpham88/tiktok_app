import axios from 'axios';

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 2000,
});

export const get = async (path, params = {}) => {
  const response = await httpRequest.get(path, params);
  return response.data;
};

export default httpRequest;
