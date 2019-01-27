import { StyleSheet } from "react-native";

import {
  containerComponent,
  headerComponent,
  centerBtnAction,
  headerActionBtn,
  contentContained
} from "../../../helpers/styles/_layout";
import { blackColor, fontWhiteColor, fontYellowColor } from "../../../helpers/styles/_colors";
import {
  contentLight,
  contentXs,
  contentBold,
  titleRegular,
  titleMedium,
  titleh3,
} from "../../../helpers/styles/_typos";

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
  roadtripPerDayContainer: {
    flexWrap: "wrap",
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 0
  },
  roadtripSingle: {
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: blackColor.dark,
    borderRadius: 15,
    marginBottom: 10,
    width: "46%"
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