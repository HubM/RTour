import { StyleSheet } from "react-native";

import { greenColor, grayColor } from "../../../helpers/styles/colors";
import logo from "../../../helpers/styles/logo";
import { containerComponent } from "../../../helpers/styles/layout";
import { contentS, contentRegular, contentLight, contentBold } from "../../../helpers/styles/typos";
import { whiteMainButton, whiteSecondButton } from "../../../helpers/styles/buttons";


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
