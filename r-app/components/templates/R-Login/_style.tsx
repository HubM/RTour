import { StyleSheet, ViewStyle } from 'react-native';
import { contentContained, centeredInlineElements } from '../../helpers/styles/_layout';
import { grayColor } from '../../helpers/styles/_colors';
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
    ...contentContained,
    marginTop: 50
  },
  multiplesSecondAction: {
    flexDirection: "row",
    ...centeredInlineElements
  } as ViewStyle,
  secondActionSeparator: {
    margin: 0
  }
})