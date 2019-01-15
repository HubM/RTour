import { StyleSheet } from "react-native";

import { containerComponent } from "../../../includes/styles/layout";
import { blackColor, fontWhiteColor, fontYellowColor } from "../../../includes/styles/colors";

export default StyleSheet.create({
  container: {
    ...containerComponent,
    backgroundColor: blackColor.dark
  }
});