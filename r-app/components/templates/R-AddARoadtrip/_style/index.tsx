import { StyleSheet } from 'react-native';

import { greenColor, yellowColor } from "../../../helpers/styles/_colors";
import { containerComponent, headerComponent, headerActionBtn, contentContained, centeredInlineElements, inlineElements } from "../../../helpers/styles/_layout";
import { titleh3, titleMedium, contentS, contentRegular, contentLight, contentBold } from "../../../helpers/styles/_typos";
import { fontWhiteColor, placeholderColor } from "../../../helpers/styles/_colors";



export default StyleSheet.create({
  container: {
    ...containerComponent,
    backgroundColor: greenColor.dark,
  },
  header: {
    ...headerComponent,
    justifyContent: "flex-start"
  },
  content: {
    ...contentContained
  },
  title: {
    ...titleh3,
    ...titleMedium,
    ...fontWhiteColor,
    textAlign: "center",
    marginBottom: 30
  },
  roadtripType: {
    ...inlineElements,
    ...centeredInlineElements
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