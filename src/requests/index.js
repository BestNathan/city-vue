import Axios from 'axios';
import session from './session';

Axios.defaults.baseURL = 'https://mocha-city-api.sensoro.com';
Axios.interceptors.response.use(res => res.data);

export default {
  session,
};
