import Axios from 'axios';

function login(phone, password, remember = false) {
  const url = '/sessions';
  return Axios.post(url, {
    phone,
    password,
    remember,
  });
}

function me() {
  const url = '/users/me';
  return Axios.get(url);
}

export default {
  login,
  me,
};
