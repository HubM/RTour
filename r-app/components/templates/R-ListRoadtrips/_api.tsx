const axios = require('react-native-axios');

export const getRoadtripsByDate = (date: string) =>
  new Promise((resolve, reject) => {
    axios.get('http://192.168.1.15:3000/api/v1/roadtrips', {
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