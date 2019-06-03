import { StyleSheet, ViewStyle } from "react-native";
import { grayColor, fontBlackColor } from "../../helpers/styles/colors";
import { titleh3, titleMedium } from '../../helpers/styles/typos';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: grayColor.light,
    paddingHorizontal: 15
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 30,
  },
  content: {
    paddingHorizontal: 30,
    marginTop: 50
  },
  profilePicture: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginBottom: 10
  } as ViewStyle,
  riderContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    ...titleh3,
    ...titleMedium,
    ...fontBlackColor,
    textAlign: "center",
    marginBottom: 0
  },
  city: {
    ...fontBlackColor,
    textAlign: "center",
  },
  actionsButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    marginHorizontal: 15
  }
});