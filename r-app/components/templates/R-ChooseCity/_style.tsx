import { StyleSheet } from 'react-native';
import { grayColor } from '../../helpers/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: grayColor.light,
    position: "relative"
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 35,
    paddingHorizontal: 30,
    paddingTop: 30
  },
  content: {
    paddingHorizontal: 30
  }
})