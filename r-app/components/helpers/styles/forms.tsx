import { StyleSheet } from 'react-native';

import { contentS, contentRegular } from "./_typos";
import { yellowColor } from "./_colors";

export default StyleSheet.create({
  inputText: {
    paddingBottom: 15,
    ...contentS,
    ...contentRegular,
    color: yellowColor.light
  }
});