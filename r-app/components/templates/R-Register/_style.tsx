import { StyleSheet } from 'react-native';
import { greenColor } from '../../helpers/styles/colors';
import logo from "../../helpers/styles/logo";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: greenColor.dark
  },
  logo: {
    ...logo,
    marginBottom: 30
  },
  content: {
    paddingHorizontal: 30,
    marginTop: 50
  }
})