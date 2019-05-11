import { StyleSheet } from 'react-native';

import { greenColor, yellowColor, grayColor } from "../../helpers/styles/colors";
import { titleh3, titleMedium, } from "../../helpers/styles/typos";
import { fontWhiteColor, placeholderColor, uiErrorColor } from "../../helpers/styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: greenColor.dark,
    position: "relative"
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 35,
    paddingHorizontal: 30,
    paddingTop: 30
  },
  errorMessageContainer: {
    width: "90%",
    height: 50,
    marginHorizontal: "5%",
    backgroundColor: uiErrorColor.dark,
    ...fontWhiteColor,
    position: "absolute",
    top: 100,
    zIndex: 1,
    borderRadius: 100
  },
  content: {
    paddingHorizontal: 30
  },
  title: {
    ...titleh3,
    ...titleMedium,
    ...fontWhiteColor,
    textAlign: "center",
    marginBottom: 15,
    marginTop: 0
  },
  roadtripType: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  roadtripType__container: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 10
  },
  roadtripType__text: {
    marginTop: 5,
    color: placeholderColor
  },
  requiredFieldsDesc: {
    color: grayColor.light,
    marginBottom: 30
  }
})