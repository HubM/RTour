const axios = require('react-native-axios');
const settings = require('../../../settings');

export const checkUsernameOrEmailAPI = (usernameOrEmail: string) => {
  return new Promise((resolve, reject) => {
    const url = `${settings.apiUrl}/login`;
    axios.post(url, {
      usernameOrEmail
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  })
}