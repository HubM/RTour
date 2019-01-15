import { StyleSheet } from "react-native";

import { greenColor, grayColor } from "../../../includes/styles/colors";
import logo from "../../../includes/styles/logo";
import { containerComponent } from "../../../includes/styles/layout";
import { contentS, contentRegular, contentLight, contentBold } from "../../../includes/styles/typos";
import { whiteMainButton, whiteSecondButton } from "../../../includes/styles/buttons";


export default StyleSheet.create({
  container: {
    ...containerComponent,
    backgroundColor: greenColor.dark,
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
