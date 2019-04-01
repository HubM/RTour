const axios = require('react-native-axios');
const settings = require('../../../settings');

export const getUserByUserNameAPI = (username: string) =>
  new Promise((resolve, reject) => {
    const url = `${settings.apiUrl}/user`;
    axios.get(url, {
      params: {
        username
      },
    })
      .then((user: object) => {
        resolve(user.data);
      })
      .catch((error: string) => {
        reject(error);
      });
  })

export const getRoadtripsByUserNameAPI = (username: string) =>
  new Promise((resolve, reject) => {

    const url = `${settings.apiUrl}/roadtrips/byUser`;
    axios.get(url, {
      params: {
        username
      }
    })
      .then((roadtrips: object) => {
        resolve(roadtrips.data)
      })
      .catch((error: string) => {
        reject(error);
      })
  })