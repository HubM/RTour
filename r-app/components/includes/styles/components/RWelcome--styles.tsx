import { greenColor, grayColor } from "../helpers/colors";
import { StyleSheet } from "react-native";
import logo from "../helpers/logo";

import { containerComponent } from "../helpers/layout";
import { contentS, contentRegular, contentLight, contentBold } from "../helpers/typos";
import { whiteMainButton, whiteSecondButton } from "../helpers/buttons";


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
