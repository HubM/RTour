const axios = require('react-native-axios');
const settings = require('../../../settings');

const getUserByUserName = (username: string) =>
  new Promise((resolve, reject) => {
    const url = `${settings.apiUrl}/user`;
    axios.get(url, {
      params: {
        username
      },
    })
      .then((user: object) => {
        resolve(user);
      })
      .catch((error: string) => {
        reject(error);
      });
  })

export default getUserByUserName;