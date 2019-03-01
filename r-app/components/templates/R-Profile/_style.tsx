import { StyleSheet } from "react-native";

import {
  blackColor, fontWhiteColor,
} from "../../helpers/styles/colors";
import { titleh3, titleMedium, contentXs, contentLight, contentS, contentRegular, contentM } from '../../helpers/styles/typos';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blackColor.light
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
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
    ...contentXs,
    ...contentLight,
    ...fontWhiteColor
  },
  profileInfoValue: {
    ...contentM,
    ...contentRegular,
    ...fontWhiteColor,
    lineHeight: 25
  }
});