import { StyleSheet } from 'react-native';
import { containerComponent, contentContained } from '../../../helpers/styles/_layout';
import { greenColor } from '../../../helpers/styles/_colors';
import logo from "../../../helpers/styles/logo";

export default StyleSheet.create({
  container: {
    ...containerComponent,
    backgroundColor: greenColor.dark
  },
  logo: {
    ...logo,
    marginBottom: 30
  },
  content: {
    ...contentContained,
    marginTop: 50
  }
})