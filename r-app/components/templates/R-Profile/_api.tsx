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
      .then((user: {data: object}) => {
        resolve(user.data);
      })
      .catch((error: object) => {
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
      .then((roadtrips: {data: object}) => {
        resolve(roadtrips.data)
      })
      .catch((error: object) => {
        reject(error);
      })
  })