const axios = require('react-native-axios');
const settings = require('../../../settings');

export const deleteOwnRoadtripAPI = (id: string) => {
  return new Promise((resolve, reject) => {
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
}