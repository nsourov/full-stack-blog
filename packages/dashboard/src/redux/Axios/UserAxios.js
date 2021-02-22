import axios from 'axios';

// Set config defaults when creating the instance
const UserAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { Authorization: localStorage.getItem('jwtToken') },
});

export default UserAxios;
