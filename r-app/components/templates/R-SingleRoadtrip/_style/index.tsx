import { StyleSheet } from "react-native";

import { containerComponent, headerComponent } from "../../../helpers/styles/layout";
import { blackColor, grayColor, yellowColor } from "../../../helpers/styles/colors";
import { titleh2, titleh3 } from "../../../helpers/styles/typos";

export default StyleSheet.create({
  container: {
    ...containerComponent,
    backgroundColor: blackColor.dark
  },
  header: {
    ...headerComponent,
    justifyContent: "flex-start"
  },
  roadtripTitle: {
    marginVertical: 50,
    lineHeight: 0
  },
  roadtripTitleStartCity: {
    ...titleh3,
    color: grayColor.light,
    lineHeight: 30
  },
  roadtripTitleEndCity: {
    ...titleh2,
    color: yellowColor.light,
    lineHeight: 50
  }
});