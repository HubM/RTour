import { greenColor, grayColor } from "../helpers/colors";
import { StyleSheet } from "react-native";
import logo from "../helpers/logo";

import { contentS, contentRegular, contentLight, contentBold } from "../helpers/typos";
import { whiteMainButton, whiteSecondButton } from "../helpers/buttons";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: greenColor.dark,
    paddingLeft: 20,
    paddingRight: 20
  },
  logo,
  introContainer: {
    marginTop: 20,
    marginBottom: 40
  },
  introContent: {
    ...contentS,
    ...contentRegular,
    color: grayColor.light,
    marginTop: 20,
  },
  mainButton: {
    ...whiteMainButton,
    ...contentBold
  },
  secondButton: {
    ...whiteSecondButton,
    ...contentLight
  }
});
