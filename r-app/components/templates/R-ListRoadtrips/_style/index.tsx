import { StyleSheet } from "react-native";

import {
  containerComponent,
  headerComponent,
  centerBtnAction,
  headerActionBtn,
  contentContained
} from "../../../helpers/styles/layout";
import { blackColor, fontWhiteColor, fontYellowColor } from "../../../helpers/styles/colors";
import {
  contentLight,
  contentXs,
  contentBold,
  titleRegular,
  titleMedium,
  titleh3,
} from "../../../helpers/styles/typos";

export default StyleSheet.create({
  container: {
    ...containerComponent,
    backgroundColor: blackColor.light
  },
  header: {
    ...headerComponent,
    justifyContent: "space-between"
  },
  profileBtn: {
    ...headerActionBtn 
  },
  filterBtn: {
    ...fontWhiteColor,
    ...contentXs,
    ...titleRegular,
    ...headerActionBtn
  },
  date: {
    ...titleh3,
    ...titleMedium,
    ...fontWhiteColor,
    textAlign: "center",
    marginBottom: 30
  },
  content: {
    ...contentContained
  },
  roadtripsContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  roadtripSingle: {
    justifyContent: "flex-start",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: blackColor.dark,
    borderRadius: 15,
    marginBottom: 10,
    width: "40%"
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
    marginVertical: 5
  },
  roadtripSingle__duration: {
    ...contentXs,
    ...fontWhiteColor,
    ...titleMedium
  },
  addBtn: {
    ...centerBtnAction
  }
});