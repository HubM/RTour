const axios = require('react-native-axios');
const settings = require('../../../settings');

export const createUserAPI = (user: object) =>
  new Promise((resolve, reject) => {
    const url = `${settings.apiUrl}/user`;
    axios.post(url, { user })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  })