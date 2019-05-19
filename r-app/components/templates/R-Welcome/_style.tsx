import { StyleSheet } from "react-native";

import logo from "../../helpers/styles/logo";
import { greenColor, grayColor } from "../../helpers/styles/colors";
import { contentS, contentRegular } from "../../helpers/styles/typos";


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: greenColor.dark,
  },
  logo,
  content: {
    paddingHorizontal: 30
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
