import { StyleSheet } from 'react-native';

import { greenColor } from "../../helpers/styles/colors";
import { titleh3, titleMedium, } from "../../helpers/styles/typos";
import { fontWhiteColor, placeholderColor } from "../../helpers/styles/colors";



export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: greenColor.dark,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  content: {
    paddingHorizontal: 30
  },
  title: {
    ...titleh3,
    ...titleMedium,
    ...fontWhiteColor,
    textAlign: "center",
    marginBottom: 30
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
  }
})