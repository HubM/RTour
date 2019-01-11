import colors from "../helpers/colors";
import { StyleSheet } from "react-native";
import { Font } from "expo";
import logo from "../helpers/logo";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green.dark,
    paddingLeft: 20,
    paddingRight: 20
  },
  introContainer: {
    marginTop: 80
  },
  introContent: {
    color: colors.gray.light,
  },
  logo
});
