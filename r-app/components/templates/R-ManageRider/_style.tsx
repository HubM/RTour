import { StyleSheet, ViewStyle } from "react-native";
import { grayColor, fontBlackColor } from "../../helpers/styles/colors";
import { titleh3, titleMedium } from '../../helpers/styles/typos';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: grayColor.light
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 35,
    padding: 15
  },
  riderContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
    marginBottom: "10%"
  },
  profilePicture: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginBottom: 10
  } as ViewStyle,
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
    paddingHorizontal: 30
  }
});