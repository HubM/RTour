const axios = require('react-native-axios');
const settings = require('../../../settings');

export const getRoadtripsByDateAPI = (date: string) => {
  return new Promise((resolve, reject) => {
    const url = `${settings.apiUrl}/roadtrips/byDate`;

    axios.get(url, {
      params: {
        date
      },
    })
      .then((roadtrips: Array<object>) => {
        resolve(roadtrips.data);
      })
      .catch((error: object) => {
        reject(error);
      });
  })
}