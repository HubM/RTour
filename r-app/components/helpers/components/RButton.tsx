import * as React from "react";
import { TouchableOpacity, Text } from "react-native";

import stylesButtons from "../../helpers/styles/buttons";

interface RButtonProps {
  text: string,
  color: string,
  onPressEvent(): void,
  type: string
};

export default class RButton extends React.PureComponent<RButtonProps> {
  render() {
    const { text, color, onPressEvent, type } = this.props;

    let stylesBasedOnType = [];
    let textButtonTransform;

    if (type === "main") {
      stylesBasedOnType = [stylesButtons.centered, stylesButtons.main, { color, borderColor: color }]
      textButtonTransform = text.toUpperCase();
    } else {
      stylesBasedOnType = [stylesButtons.second, { color, borderColor: color }]
      textButtonTransform = text.toLowerCase();
    }

    return (
      <TouchableOpacity onPress={onPressEvent}>
        <Text style={stylesBasedOnType}>{textButtonTransform}</Text>
      </TouchableOpacity>
    );
  }
}