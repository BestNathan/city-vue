import Axios from 'axios';
import session from './session';

Axios.defaults.baseURL = 'https://mocha-city-api.sensoro.com';
Axios.interceptors.response.use(res => res.data);
Axios.defaults.validateStatus = status => status < 400;

export default {
  session,
};
