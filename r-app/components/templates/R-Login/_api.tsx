const axios = require('react-native-axios');
const settings = require('../../../settings');

export const checkUsernameAPI = (username: string) => {
  return new Promise((resolve, reject) => {
    const url = `${settings.apiUrl}/login`;
    axios.post(url, {
      username
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  })
}