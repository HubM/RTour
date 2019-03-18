const axios = require('react-native-axios');

export const addRoadtripAPI = (roadtrip: object) =>
  new Promise((resolve, reject) => {
    console.log("I WILL SEND THIS TRIP", roadtrip);

    axios.post(`http://192.168.1.15:3000/api/v1/roadtrip`, roadtrip)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  })