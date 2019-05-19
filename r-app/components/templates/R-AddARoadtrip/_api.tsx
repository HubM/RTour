const axios = require('react-native-axios');
const settings = require('../../../settings');


export const addRoadtripAPI = (roadtrip: object) =>
  new Promise((resolve, reject) => {
    const url = `${settings.apiUrl}/roadtrip`;
    axios.post(url, roadtrip)
      .then((response: object) => {
        resolve(response);
      })
      .catch((error: object) => {
        reject(error);
      });
  })