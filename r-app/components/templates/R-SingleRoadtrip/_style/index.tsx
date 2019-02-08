import { StyleSheet, PixelRatio, ViewStyle } from "react-native";

import { containerComponent, headerComponent, inlineElements, headerActionBtn, contentContained } from "../../../helpers/styles/_layout";
import { blackColor, grayColor, yellowColor } from "../../../helpers/styles/_colors";
import {
  titleh2,
  titleh3,
  titleRegular,
  titleMedium,
  contentXs,
  contentS,
  contentLight,
  contentRegular,
  contentBold,
} from "../../../helpers/styles/_typos";

export default StyleSheet.create({
  container: {
    ...containerComponent,
    backgroundColor: blackColor.dark
  },
  header: {
    ...headerComponent,
    justifyContent: "flex-start"
  },
  content: {
    ...contentContained
  },
  roadtripTitle: {
    marginTop: 30,
    marginBottom: 50
  },
  roadtripTitleStartCity: {
    ...titleh3,
    ...titleRegular,
    color: grayColor.light,
    lineHeight: 30
  },
  roadtripTitleEndCity: {
    ...titleh2,
    ...titleMedium,
    color: yellowColor.light,
    lineHeight: 50
  },
  roadtripCreator: {
    ...inlineElements,
    paddingBottom: 6,
    borderBottomColor: blackColor.light,
    borderBottomWidth: 1 / PixelRatio.get()
  } as ViewStyle,
  roadtripCreatorName: {
    ...contentS,
    ...contentRegular,
    color: grayColor.light,
    marginLeft: 15,
    alignSelf: "center"
  },
  roadtripSubInfos: {
    marginTop: 40,
  },
  roadtripSubInfos__single: {
    ...inlineElements,
    alignItems: "center",
    marginBottom: 25
  } as ViewStyle,
  roadtripSubInfos__single__text: {
    ...contentXs,
    ...contentLight,
    color: grayColor.light,
    marginLeft: 15,
    marginRight: 0,
    padding: 0
  },
});