import * as React from "react";
import { TouchableOpacity, Text } from "react-native";

import stylesButtons from "../../helpers/styles/buttons";

interface MainButtonProps {
  text: string,
  color: string,
  onPressEvent(): void
};

export default class RMainButton extends React.PureComponent<MainButtonProps> {
  render() {
    const { text, color, onPressEvent } = this.props;

    let buttonColor;

    color === "white"
      ? buttonColor = stylesButtons.mainWhite
      : buttonColor = stylesButtons.mainYellow

    return (
      <TouchableOpacity onPress={onPressEvent}>
        <Text style={[stylesButtons.centered, stylesButtons.main, buttonColor]}>{text.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  }
}