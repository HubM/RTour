import colors from "../helpers/colors";
import { StyleSheet } from "react-native";
import logo from "../helpers/logo";
import { contentS } from "../helpers/typos";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green.dark,
    paddingLeft: 20,
    paddingRight: 20
  },
  introContainer: {
    marginTop: 40
  },
  introContent: {
    color: colors.gray.light,
    marginTop: 40,
    ...contentS
  },
  logo
});
