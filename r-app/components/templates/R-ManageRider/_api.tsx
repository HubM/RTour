const axios = require('react-native-axios');
const settings = require('../../../settings');

export const refusedOrCanceledRiderToRoadtripAPI = (user: {_id: string, deviceToken: string}, roadtripId: string, type: string) =>
  new Promise((resolve, reject) => {
    const url = `${settings.apiUrl}/rider`;
    axios.delete(url, {
      data: {
        userId: user._id,
        deviceToken: user.deviceToken,
        roadtripId,
        type
      }
    })
      .then((response: {data: object}) => {
        resolve(response.data);
      })
      .catch((error: string) => {
        reject(error);
      });
  })

export const acceptRiderToRoadtripAPI = (userId: string, roadtripId: string) =>
  new Promise((resolve, reject) => {
    const url = `${settings.apiUrl}/rider`;

    axios.post(url, {
      userId,
      roadtripId
    })
      .then((response: {data: object}) => (
        resolve(response.data)
      ))
      .catch((error: object) => {
        reject(error);
      })
  })

export const getRoadtripById = (roadtripId: string) =>
  new Promise((resolve, reject) => {
    const url = `${settings.apiUrl}/roadtrip`;

    axios.get(url, {
      params: {
        roadtripId
      },
    })
      .then((roadtrip: {data: object}) => {
        resolve(roadtrip.data);
      })
      .catch((error: String) => {
        reject(error);
      });
  })