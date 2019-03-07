const axios = require('react-native-axios');

export const getAllRoadtrips = () => 
  new Promise((resolve, reject) => {
    axios.get('http://127.0.0.1:3000/api/v1/roadtrips')
    .then((roadtrips: Array<Object>) => {
      resolve(roadtrips.data);
    })
    .catch((error: String) => {
      reject(error);
    });
  })

