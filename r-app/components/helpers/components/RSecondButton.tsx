import * as React from "react";
import { TouchableOpacity, Text } from "react-native";
import { withNavigation } from "react-navigation";

import stylesButtons from "../../helpers/styles/buttons";

interface SecondButtonProps {
  text: string,
  route: string,
  color: string,
  onPressEvent(): void
};


export default class RSecondButton extends React.PureComponent<SecondButtonProps> {
  render() {
    const { text, route, color, onPressEvent } = this.props;

    let buttonColor;

    color === "white"
      ? buttonColor = stylesButtons.secondWhite
      : buttonColor = stylesButtons.secondYellow

    return (
      <TouchableOpacity onPress={onPressEvent}>
        <Text style={[stylesButtons.second, buttonColor]}>{text}</Text>
      </TouchableOpacity>
    );
  }
}