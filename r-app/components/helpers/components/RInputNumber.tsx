import * as React from "react";
import { View, TextInput } from "react-native";
import SvgUri from "react-native-svg-uri";

import styleForm from "../styles/forms";
import { placeholderColor } from "../styles/_colors";

interface RInputNumberProps {
  placeholder: string,
  onChangeNumber(seats: number): void
};

interface RInputNumberState {
  emptyInputNumber: boolean
}

export default class RInputNumber extends React.PureComponent<RInputNumberProps, RInputNumberState> {
  constructor(props: RInputNumberProps) {
    super(props)
    this._writeInputNumber = this._writeInputNumber.bind(this);
  }

  state = {
    emptyInputNumber: true
  }

  _writeInputNumber(stringifiedNumber: string) {
    const { onChangeNumber } = this.props;
    const numberSeats = Number(stringifiedNumber);

    onChangeNumber(numberSeats)

    if (numberSeats > 0) {
      this.setState({
        emptyInputNumber: false
      })
    } else {
      this.setState({
        emptyInputNumber: true
      })
    }
  }

  render() {
    const { emptyInputNumber } = this.state;
    const { placeholder } = this.props;
    return (
      <View style={[styleForm.inputContainer, emptyInputNumber ? styleForm.emptyInput : styleForm.busyInput]}>
        <TextInput
          style={styleForm.inputText}
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          autoCapitalize="none"
          keyboardAppearance="dark"
          keyboardType="numeric"
          onChangeText={this._writeInputNumber}
        />
        <SvgUri width="25" height="13" source={
          emptyInputNumber
            ? require("../../../assets/icons/icon--numberInputWhite.svg")
            : require("../../../assets/icons/icon--numberInputYellow.svg")
        } />
      </View>
    );

  }
}