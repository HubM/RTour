import { StyleSheet, PixelRatio, ViewStyle } from "react-native";

import { blackColor, grayColor, yellowColor, fontWhiteColor, fontYellowColor } from "../../helpers/styles/colors";
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
} from "../../helpers/styles/typos";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blackColor.dark
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 35,
    padding: 30
  },
  headerOwner: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 35,
    padding: 30
  },
  content: {
    paddingHorizontal: 30
  },
  roadtripTitle: {
    marginTop: 30,
    marginBottom: 50,
    flexDirection: "row", 
    justifyContent: "flex-start", 
    alignItems: "center"
  },
  roadtripTitleIcon: {
    marginRight: 10
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
    flex: 1,
    width: "100%",
    flexDirection: "row",
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
    flex: 1,
    width: "100%",
    flexDirection: "row",
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
  sectionTitle: {
    ...titleh3,
    ...titleMedium,
    ...fontWhiteColor,
    textAlign: "center",
    marginBottom: 30
  },
  singleRider: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 6,
    marginBottom: 20
  },
  singleRiderStatus: {
    ...contentXs,
    ...contentBold,
    ...fontYellowColor
  },
  deleteRoadtripBtn: {
    color: yellowColor.light,
    fontWeight: "500"
  },
  noRiders: {
    ...fontWhiteColor,
    textAlign: "center"
  }
});