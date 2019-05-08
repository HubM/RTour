import { StyleSheet } from "react-native";

import {
  blackColor,
  fontWhiteColor,
  fontYellowColor,
  grayColor,
  yellowColor,
  fontBlackColor
} from "../../helpers/styles/colors";

import {
  contentLight,
  contentXs,
  contentS,
  contentBold,
  titleRegular,
  titleMedium,
  titleh3,
} from "../../helpers/styles/typos";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blackColor.light
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  profileBtn: {
    padding: 30,
    marginTop: 20
  },
  filterBtn: {
    ...fontWhiteColor,
    ...contentXs,
    ...titleRegular,
    padding: 30,
    marginTop: 20
  },

  buttonDateContainer: {
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  date: {
    ...titleh3,
    ...titleMedium,
    ...fontWhiteColor,
    textAlign: "center",
    marginRight: 10
  },
  content: {
    paddingHorizontal: 30
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
  inlineDateBtns: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  buttonManuallyChangeDate: {
    alignItems: "center",
    padding: 15 
  },
  buttonManuallyChangeDate__icon: {
    marginBottom: 5
  },
  buttonManuallyChangeDate__text: {
    ...fontYellowColor,
    fontSize: 12
  },
  prev: {
    padding: 10,
    marginRight: 5,
  },
  next: {
    padding: 10,
    marginLeft: 5,
  },
  noRoadtripsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  noRoadtrips: {
    ...contentS,
    color: grayColor.dark,
    textAlign: "center",
    fontStyle: "italic",
    marginRight: 5
  },
  addBtn: {
    position: "absolute",
    bottom: "10%",
    alignSelf: "center"
  }
});