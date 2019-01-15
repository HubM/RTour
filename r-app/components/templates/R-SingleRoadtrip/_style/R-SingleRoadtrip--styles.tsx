import { StyleSheet } from "react-native";

import { containerComponent } from "../../../helpers/styles/layout";
import { blackColor, fontWhiteColor, fontYellowColor } from "../../../helpers/styles/colors";

export default StyleSheet.create({
  container: {
    ...containerComponent,
    backgroundColor: blackColor.dark
  }
});