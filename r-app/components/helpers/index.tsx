export const isIndexEven = (index: number) => index % 2 == 0;

export const validateEmail = (mail: string) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailRegex.test(mail)) {
    return true;
  }
  return false
}

export const isEmptyObject = (obj: object) => {
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}


export const seeRoadtripHelpers = (roadtrip: object, navigation: any) => {
  navigation.navigate('SingleRoadtrip', roadtrip);
}