const axios = require('react-native-axios');

const getUserByUserName = (username: string) => {
  new Promise((resolve, reject) => {
    axios.get('http://192.168.43.121:3000/api/v1/user', {
      params: {
        username
      },
    })
      .then((user: object) => {
        console.log(user)
        resolve(user.data);
      })
      .catch((error: string) => {
        reject(error);
      });
  })
}

export default getUserByUserName;