import  { contentXs, contentS } from './typos';
import { grayColor, yellowColor } from './colors';
import { ViewStyle } from 'react-native';

const mainButton = {
  ...contentS,
  paddingHorizontal: 55,
  paddingVertical: 10,
  alignSelf: "center",
  borderWidth: 2,
  borderRadius: 8,
  marginBottom: 40
} as ViewStyle;


const secondButton = {
  ...contentXs,
  alignSelf: "center",
  bottom: 0,
  marginBottom: 40
} as ViewStyle;

export const whiteMainButton = { 
  ...mainButton,
  color: grayColor.light,
  borderColor: grayColor.light
}

export const yellowMainButton = {
  ...mainButton,
  color: yellowColor.light,
  borderColor: yellowColor.light
}

export const whiteSecondButton = {
  ...secondButton,
  color: grayColor.light
}

export const backArrow = {
  marginTop: 35,
  padding: 15,
}