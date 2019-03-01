import { StyleSheet } from "react-native";

import { greenColor, grayColor } from "../../helpers/styles/_colors";
import logo from "../../helpers/styles/logo";
import { contentContained } from "../../helpers/styles/_layout";
import { contentS, contentRegular, contentLight, contentBold } from "../../helpers/styles/_typos";


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: greenColor.dark,
  },
  logo,
  content: {
    ...contentContained
  },
  introContainer: {
    marginTop: 20
  },
  introContent: {
    ...contentS,
    ...contentRegular,
    color: grayColor.light,
    marginTop: 20,
  },
});
