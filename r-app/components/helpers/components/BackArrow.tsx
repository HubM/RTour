import * as React from "react";
import { TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import SvgUri from "react-native-svg-uri";

import stylesButton from "../styles/buttons";

interface RoadtripProps {
  color: string,
  navigationRoute: string,
};

class BackArrow extends React.PureComponent<RoadtripProps> {
  _generateNavigation = () => {
    const { navigation, navigationRoute } = this.props;
    if(navigationRoute === "back") {
      return navigation.pop()
    }
    return navigation.navigate(navigationRoute);
  }

  render() {
    const { color, navigation } = this.props;
    return (
      <TouchableOpacity onPress={() => navigation.pop()} style={stylesButton.backArrow}>
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