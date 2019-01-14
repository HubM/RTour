import { StyleSheet } from "react-native";

import { containerComponent, headerComponent } from "../helpers/layout";
import { blackColor, fontWhiteColor, fontYellowColor } from "../helpers/colors";
import {
  contentLight,
  contentXs,
  contentBold,
  titleRegular,
  titleMedium,
  titleh3,
} from "../helpers/typos";

export default StyleSheet.create({
  container: {
    ...containerComponent,
    backgroundColor: blackColor.light
  },
  header: {
    ...headerComponent,
    justifyContent: "space-between"
  },
  filterBtn: {
    ...fontWhiteColor,
    ...contentXs,
    ...titleRegular
  },
  date: {
    ...titleh3,
    ...titleMedium,
    ...fontWhiteColor,
    textAlign: "center",
    marginVertical: 30
  },
  roadtripsContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  roadtripSingle: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: blackColor.dark,
    borderRadius: 15,
    marginBottom: 10
  },
  roadtripSingle__startingCity: {
    ...contentLight,
    ...fontWhiteColor,
    fontSize: 13,
    lineHeight: 15
  },
  roadtripSingle__endingCity: {
    ...contentBold,
    ...fontYellowColor,
    fontSize: 16
  },
  roadtripSingle__hour: {
    ...titleMedium,
    ...fontWhiteColor,
    fontSize: 14,
    marginVertical: 9
  },
  roadtripSingle__duration: {
    ...contentXs,
    ...fontWhiteColor,
    ...titleMedium
  }
});