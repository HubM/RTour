import * as React from "react";
import { TouchableOpacity, Text } from "react-native";
import { withNavigation } from "react-navigation";

import stylesButtons from "../../helpers/styles/buttons";

interface MainButtonProps {
  text: string,
  route: string,
  color: string
};

class RMainButton extends React.PureComponent<MainButtonProps> {
  render() {
    const { text, route, color, navigation } = this.props;

    let buttonColor;

    color === "white" 
    ? buttonColor = stylesButtons.mainWhite
    : buttonColor = stylesButtons.mainYellow
    
    return (
      <TouchableOpacity onPress={() => navigation.navigate(route)}>
        <Text style={[stylesButtons.main, buttonColor]}>{text.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(RMainButton);