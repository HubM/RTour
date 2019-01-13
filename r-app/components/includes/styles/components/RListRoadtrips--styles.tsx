import { StyleSheet } from "react-native";

import { containerComponent, headerComponent } from "../helpers/layout";
import { blackColor } from "../helpers/colors";

export default StyleSheet.create({
  container: {
    ...containerComponent,
    backgroundColor: blackColor.light
  },
  header: {
    ...headerComponent
  }
});