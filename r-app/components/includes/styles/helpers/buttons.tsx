import  { contentXs, contentS } from './typos';
import { grayColor } from './colors';
import { ViewStyle } from 'react-native';

const mainButton = {
  ...contentS,
  paddingHorizontal: 55,
  paddingVertical: 10,
  alignSelf: "center",
  borderWidth: 2,
  borderRadius: 8
} as ViewStyle;


const secondButton = {
  ...contentXs,
  alignSelf: "center",
  bottom: 0,
  marginTop: 40
} as ViewStyle;

export const whiteMainButton = { 
  ...mainButton,
  color: grayColor.light,
  borderColor: grayColor.light
}

export const whiteSecondButton = {
  ...secondButton,
  color: grayColor.light
}