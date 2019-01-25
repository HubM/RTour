import * as React from "react";
import { TouchableOpacity, Text } from "react-native";
import { withNavigation } from "react-navigation";

import stylesButtons from "../../helpers/styles/buttons";

interface ButtonProps {
  text: string,
  route: string,
  color: string
};

class RWelcome extends React.PureComponent<ButtonProps> {
  render() {
    const { text, route, color, navigation } = this.props;

    let buttonColor;

    color === "white" 
    ? buttonColor = stylesButtons.white
    : buttonColor = stylesButtons.yellow
    
    return (
      <TouchableOpacity onPress={() => navigation.navigate(route)}>
        <Text style={[stylesButtons.main, buttonColor]}>{text.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(RWelcome);