import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('username');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  return dispatch => {
    return axios.post('http://localhost:8080/user/login', data).then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('username', data.username);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  }
}
