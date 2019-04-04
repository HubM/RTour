const axios = require('react-native-axios');
const settings = require('../../../settings');

export const getUserByIdAPI = (id: string) =>
  new Promise((resolve, reject) => {
    const url = `${settings.apiUrl}/user`;
    axios.get(url, {
      params: {
        id
      },
    })
      .then((user: object) => {
        resolve(user.data);
      })
      .catch((error: string) => {
        reject(error);
      });
  })

export const getRoadtripsByUserAPI = (id: string) =>
  new Promise((resolve, reject) => {

    const url = `${settings.apiUrl}/roadtrips/byUser`;
    axios.get(url, {
      params: {
        id
      }
    })
      .then((roadtrips: object) => {
        resolve(roadtrips.data)
      })
      .catch((error: string) => {
        reject(error);
      })
  })