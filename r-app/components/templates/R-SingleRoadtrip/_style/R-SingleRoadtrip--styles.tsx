import { StyleSheet } from "react-native";

import { containerComponent } from "../../../helpers/styles/layout";
import { blackColor } from "../../../helpers/styles/colors";

export default StyleSheet.create({
  container: {
    ...containerComponent,
    backgroundColor: blackColor.dark
  }
});