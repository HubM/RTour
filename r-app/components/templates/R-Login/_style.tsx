import { StyleSheet, ViewStyle } from 'react-native';
import { grayColor } from '../../helpers/styles/colors';
import logo from "../../helpers/styles/logo";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: grayColor.light
  },
  logo: {
    ...logo,
    marginBottom: 30
  },
  content: {
    paddingHorizontal: 30,
    marginTop: 50
  },
  multiplesSecondAction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  } as ViewStyle,
  secondActionSeparator: {
    margin: 0
  }
})