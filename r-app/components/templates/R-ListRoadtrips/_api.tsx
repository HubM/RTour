const axios = require('react-native-axios');
const settings = require('../../../settings');

export const getRoadtripsByDate = (date: string) => {
  return new Promise((resolve, reject) => {
    const url = `${settings.apiUrl}/roadtrips`;

    axios.get(url, {
      params: {
        date
      },
    })
      .then((roadtrips: Array<Object>) => {
        resolve(roadtrips.data);
      })
      .catch((error: String) => {
        reject(error);
      });
  })
}