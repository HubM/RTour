const axios = require('react-native-axios');
const settings = require('../../../settings');

export const deleteOwnRoadtripAPI = (id: string) =>
  new Promise((resolve, reject) => {
    const url = `${settings.apiUrl}/roadtrip`;
    axios.delete(url, {
      data: { id }
    }).then(response => {
      resolve(response.data);
    })
      .catch(error => {
        reject(error);
      });
  })

export const addRiderToRoadtripAPI = (roadtripId: string, rider: object) =>
  new Promise((resolve, reject) => {
    const url = `${settings.apiUrl}/roadtrip`;
    const { _id, username } = rider;

    axios.put(url, {
      roadtripId,
      rider: {
        _id,
        username
      }
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error);
      })
  })