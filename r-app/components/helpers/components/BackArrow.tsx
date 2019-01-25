import * as React from "react";
import { TouchableOpacity } from "react-native";
import SvgUri from "react-native-svg-uri";
import { withNavigation } from "react-navigation";

import stylesButton from "../styles/buttons";

interface RoadtripProps {
  color: string
};

class BackArrow extends React.PureComponent<RoadtripProps> {
  render() {
    const { color, navigation } = this.props;
    return (
      <TouchableOpacity onPress={() => navigation.goBack()} style={stylesButton.backArrow}>
        {
          color === "white" 
          ? <SvgUri width="20" height="20" source={require("../../../assets/icons/icon--goToBackWhite.svg")} />
          : <SvgUri width="20" height="20" source={require("../../../assets/icons/icon--goToBackBlack.svg")} />
        }
      </TouchableOpacity>
    );
  }
}

export default withNavigation(BackArrow)