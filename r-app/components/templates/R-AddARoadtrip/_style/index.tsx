import { StyleSheet } from 'react-native';

import { greenColor, yellowColor } from "../../../helpers/styles/_colors";
import { containerComponent, headerComponent, headerActionBtn, contentContained } from "../../../helpers/styles/_layout";
import { titleh3, titleMedium, contentS, contentRegular, contentLight, contentBold } from "../../../helpers/styles/_typos";
import { fontWhiteColor } from "../../../helpers/styles/_colors";



export default StyleSheet.create({
  container: {
    ...containerComponent,
    backgroundColor: greenColor.dark,
  },
  header: {
    ...headerComponent,
    justifyContent: "flex-start"
  },
  backButton: {
    ...headerActionBtn
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
  inputText: {
    paddingBottom: 15,
    ...contentS,
    ...contentRegular,
    color: yellowColor.light
  }
})