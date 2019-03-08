const axios = require('react-native-axios');

export const getRoadtripsByDate = (date) => 
  new Promise((resolve, reject) => {
    axios.get('http://127.0.0.1:3000/api/v1/roadtrips',{
      params: {
        date
      }
    })
    .then((roadtrips: Array<Object>) => {
      resolve(roadtrips.data);
    })
    .catch((error: String) => {
      reject(error);
    });
  })

