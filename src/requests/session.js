import Axios from 'axios';

function login(phone, password, remember = false) {
  const url = '/sessions';
  return Axios.post(url, {
    phone,
    password,
    remember,
  });
}

export default {
  login,
};
