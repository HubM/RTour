import * as React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import SvgUri from "react-native-svg-uri";

import styleForm from "../styles/forms";
import { placeholderColor } from "../styles/_colors";

interface RInputNumberProps {
  placeholder: string,
  onChangeNumber(seats: string): void
};

interface RInputNumberState {
  numberValue: string,
  emptyInputNumber: boolean,
}

export default class RInputNumber extends React.PureComponent<RInputNumberProps, RInputNumberState> {
  constructor(props: RInputNumberProps) {
    super(props)
    this._writeInputNumber = this._writeInputNumber.bind(this);
    this._clearNumberValue = this._clearNumberValue.bind(this);
  }

  state = {
    numberValue: "",
    emptyInputNumber: true,
  }

  _writeInputNumber(stringifiedNumber: string) {
    const { onChangeNumber } = this.props;
    const { numberValue } = this.state;


    this.setState({
      numberValue: stringifiedNumber
    })

    if (numberValue.length > 0) {
      onChangeNumber(numberValue)
      this.setState({
        emptyInputNumber: false
      })
    } else {
      this.setState({
        emptyInputNumber: true
      })
    }
  }

  _clearNumberValue() {
    this.setState({
      numberValue: "",
      emptyInputNumber: true
    })
  }

  render() {
    const { emptyInputNumber, numberValue } = this.state;
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
          value={numberValue}
        />

        {
          emptyInputNumber
            ?
            <SvgUri width="25" height="13" source={require("../../../assets/icons/icon--numberInputWhite.svg")} />
            :
            <TouchableOpacity onPress={this._clearNumberValue}>
              <SvgUri width="25" height="13" source={require("../../../assets/icons/icon--deleteBusyInput.svg")} />
            </TouchableOpacity>
        }

      </View>
    );

  }
}