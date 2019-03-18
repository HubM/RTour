export const isIndexEven = (index: number) => index % 2 == 0;

export const validateEmail = (mail: string) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailRegex.test(mail)) {
    return true;
  }
  return false
}