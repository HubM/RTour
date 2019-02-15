import { StyleSheet, ViewStyle } from 'react-native';

import { inlineElements } from "./_layout";
import { contentS, contentRegular } from "./_typos";
import { yellowColor, placeholderColor, fontWhiteColor } from "./_colors";


const inputDefault = {
  ...contentS,
  ...contentRegular,
}

export default StyleSheet.create({
  inputContainer: {
    marginBottom: 30,
    borderBottomWidth: 1,
    paddingBottom: 5,
    justifyContent: "space-between",
    alignItems: "center",
    ...inlineElements
  } as ViewStyle,
  inputText: {
    ...inputDefault,
    width: "80%"
  },
  emptyInput: {
    borderBottomColor: placeholderColor,
  },
  busyInput: {
    borderBottomColor: "transparent"
  },
  inputDate: {
    ...inputDefault,
  }
});