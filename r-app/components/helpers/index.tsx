import { NavigationScreenProp } from "react-navigation";

export const isIndexEven = (index: number) => index % 2 == 0;

export const convertToUkHour = (hour: string) => {
  let ts = hour;
  let H = +ts.substr(0, 2);
  let h = (H % 12) || 12;
  h = (h < 10) ? ("0" + h) : h;  // leading 0 at the left for 1 digit hours
  const ampm = H < 12 ? " AM" : " PM";
  ts = h + ts.substr(2, 3) + ampm;
  return ts;
};
