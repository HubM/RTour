import { StyleSheet, PixelRatio } from "react-native";

import { containerComponent, headerComponent } from "../../../helpers/styles/layout";
import { blackColor, grayColor, yellowColor } from "../../../helpers/styles/colors";
import { titleh2, titleh3, contentS, contentRegular } from "../../../helpers/styles/typos";

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
    marginVertical: 50
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
  },
  roadtripCreator: {
    width: "100%",
    flexDirection: "row",
    paddingBottom: 6,
    borderBottomColor: blackColor.light,
    borderBottomWidth: 1 / PixelRatio.get(),
  },
  roadtripCreatorName: {
    ...contentS,
    ...contentRegular,
    color: grayColor.light,
    marginLeft: 15,
    alignSelf: "center",
  }
});