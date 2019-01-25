import { StyleSheet } from 'react-native';

import { contentS, contentBold, contentXs, contentLight } from "./_typos";
import { grayColor, yellowColor } from "./_colors";

export default StyleSheet.create({
  main: {
    ...contentS,
    ...contentBold,
    paddingHorizontal: 55,
    paddingVertical: 10,
    alignSelf: "center",
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 40
  },
  second: {
    ...contentXs,
    ...contentLight,
    alignSelf: "center",
    bottom: 0,
    marginBottom: 40
  },
  mainWhite: {
    color: grayColor.light,
    borderColor: grayColor.light
  },
  mainYellow: {
    color: yellowColor.light,
    borderColor: yellowColor.light    
  },
  secondWhite: {
    color: grayColor.light
  },
  secondYellow: {
    color: yellowColor.light
  },
  backArrow: {
    marginTop: 35,
    padding: 15,
  }
});