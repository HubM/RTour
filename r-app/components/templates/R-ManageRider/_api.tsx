const axios = require('react-native-axios');
const settings = require('../../../settings');

export const refuseRiderToRoadtripAPI = (userId: string, roadtripId: string) =>
  new Promise((resolve, reject) => {
    const url = `${settings.apiUrl}/riders`;
    axios.delete(url, {
      data: {
        userId,
        roadtripId
      }
    })
      .then((response: object) => {
        resolve(response.data);
      })
      .catch((error: string) => {
        reject(error);
      });
  })