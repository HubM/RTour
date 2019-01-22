import { StyleSheet } from 'react-native';

import { greenColor, grayColor, yellowColor } from "../../../helpers/styles/colors";
import logo from "../../../helpers/styles/logo";
import { containerComponent, headerComponent, headerActionBtn, contentContained } from "../../../helpers/styles/layout";
import { titleh3, titleMedium, contentS, contentRegular, contentLight, contentBold } from "../../../helpers/styles/typos";
import { fontWhiteColor } from "../../../helpers/styles/colors";
import { whiteSecondButton } from "../../../helpers/styles/buttons";



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