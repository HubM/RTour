import { StyleSheet, ViewStyle } from 'react-native';

import { contentS, contentRegular } from "./typos";
import { placeholderColor, grayColor, fontWhiteColor } from "./colors";


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
  inputNumber: {
    position: "relative",
    padding: 0,
    margin: 0
  },
  emptyInput: {
    borderBottomColor: placeholderColor,
  },
  busyInput: {
    borderBottomColor: grayColor.light,
  },
  inputDate: {
    ...inputDefault,
  },
  additionnalContent__container: {
    position: "absolute", 
    left: 15,
    top: 0
  },
  additionnalContent__text: {
    ...fontWhiteColor,
    ...contentS,
    ...contentRegular
  }
});