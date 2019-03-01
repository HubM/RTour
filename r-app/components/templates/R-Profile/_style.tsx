import { StyleSheet } from "react-native";

import {
  blackColor, fontWhiteColor,
} from "../../helpers/styles/colors";
import { titleh3, titleMedium } from '../../helpers/styles/typos';

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
});