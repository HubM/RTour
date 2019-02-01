import { StyleSheet, ViewStyle } from 'react-native';

import { inlineElements } from "./_layout";
import { contentS, contentRegular } from "./_typos";
import { yellowColor, grayColor } from "./_colors";


const inputDefault = {
  ...contentS,
  ...contentRegular,
}

export default StyleSheet.create({
  inputText: {
    ...inputDefault,
    marginBottom: 25,
    paddingBottom: 15,
    color: yellowColor.light,
  },
  inputDateContainer: {
    ...inlineElements,
    justifyContent: "space-between",
    paddingBottom: 5,
    borderBottomWidth: 1,
    marginBottom: 30
  } as ViewStyle,
  emptyInput: {
    borderBottomColor: "#FFFFFF",
  },
  busyInput: {
    borderBottomColor: yellowColor.light
  },
  inputDate: {
    ...inputDefault,
  }
});