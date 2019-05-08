import * as React from "react";
import { TouchableOpacity } from "react-native";
import SvgUri from "react-native-svg-uri";
import { withNavigation } from "react-navigation";

import stylesButton from "../styles/buttons";

interface CrossExitProps {
  color: string,
  route: string
};

class CrossExit extends React.PureComponent<CrossExitProps> {
  render() {
    const { color, navigation } = this.props;

    return (
      <TouchableOpacity onPress={() => navigation.pop()} style={stylesButton.closeScreen}>
        {
          color === "white"
            ? <SvgUri width="20" height="30" source={require("../../../assets/icons/icon--crossExitWhite.svg")} />
            : <SvgUri width="20" height="30" source={require("../../../assets/icons/icon--crossExitBlack.svg")} />
        }
      </TouchableOpacity>
    );
  }
}

export default withNavigation(CrossExit)