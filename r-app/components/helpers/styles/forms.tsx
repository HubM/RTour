import { StyleSheet } from 'react-native';

import { contentS, contentRegular } from "../styles/typos";
import { yellowColor } from "../styles/colors";

export default StyleSheet.create({
  inputText: {
    paddingBottom: 15,
    ...contentS,
    ...contentRegular,
    color: yellowColor.light
  }
});