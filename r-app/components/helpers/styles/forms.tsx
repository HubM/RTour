import { StyleSheet, ViewStyle } from 'react-native';

import { contentS, contentRegular } from "./typos";
import { placeholderColor } from "./colors";


const inputDefault = {
  ...contentS,
  ...contentRegular,
}

export default StyleSheet.create({
  inputContainer: {
    marginBottom: 30,
    borderBottomWidth: 1,
    paddingBottom: 5,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
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