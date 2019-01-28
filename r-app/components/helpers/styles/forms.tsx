import { StyleSheet } from 'react-native';

import { contentS, contentRegular } from "./_typos";
import { yellowColor, grayColor } from "./_colors";


const inputDefault = {
  ...contentS,
  ...contentRegular,
  marginBottom: 25
}

export default StyleSheet.create({
  inputText: {
    ...inputDefault,
    paddingBottom: 15,
    color: yellowColor.light,
  },
  inputDate: {
    ...inputDefault,
    paddingBottom: 5,
    color: grayColor.light,
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF"
  }
});