import { StyleSheet, ViewStyle } from "react-native";

import {
  blackColor, fontWhiteColor,
} from "../../helpers/styles/colors";
import { titleh3, titleMedium, contentXxs, contentLight, contentS, contentRegular, contentM } from '../../helpers/styles/typos';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blackColor.light
  },
  header: {
    paddingLeft: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  titleContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  profilePicture: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginBottom: 10
  } as ViewStyle,
  title: {
    ...titleh3,
    ...titleMedium,
    ...fontWhiteColor,
    textAlign: "center",
    marginBottom: 30
  },
  content: {
    paddingHorizontal: 30
  },
  profileInfoContainer: {
    marginBottom: 15
  },
  profileInfoType: {
    ...contentXxs,
    ...contentLight,
    ...fontWhiteColor
  },
  profileInfoValue: {
    ...contentS,
    ...contentRegular,
    ...fontWhiteColor,
    lineHeight: 25
  },

});