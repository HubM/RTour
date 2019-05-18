import { StyleSheet, ViewStyle } from 'react-native';
import { greenColor } from '../../helpers/styles/colors';
import logo from "../../helpers/styles/logo";
import { contentS, contentRegular } from '../../helpers/styles/typos';

const inputDefault = {
  ...contentS,
  ...contentRegular,
}

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
  },
  cityButton: {
    ...inputDefault
  },
  inputContainer: {
    marginBottom: 30,
    borderBottomWidth: 1,
    paddingBottom: 5,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
  } as ViewStyle,
})