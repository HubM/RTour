import * as React from "react";
import { View, TextInput, TouchableOpacity, Alert } from "react-native";
import SvgUri from "react-native-svg-uri";

import styleForm from "../styles/forms";
import { placeholderColor } from "../styles/colors";

interface RInputNumberProps {
  placeholder: string,
  complementarySingleStateValue: string,
  complementaryMultipleStateValue: string,
  textColor: string,
  onChangeNumber(seats: string): void
};

interface RInputNumberState {
  emptyInputNumber: boolean,
  buttonScopedValue: string
}

export default class RInputNumber extends React.PureComponent<RInputNumberProps, RInputNumberState> {
  constructor(props: RInputNumberProps) {
    super(props)
    this._writeInputNumber = this._writeInputNumber.bind(this);
    this._clearNumberValue = this._clearNumberValue.bind(this);
    // this._onKeyPress = this._onKeyPress.bind(this);
  }

  state = {
    emptyInputNumber: true,
    buttonScopedValue: ""
  }

  _writeInputNumber(stringifiedNumber: string) {

    if (stringifiedNumber !== "") {
      const { onChangeNumber, complementarySingleStateValue, complementaryMultipleStateValue } = this.props;
      let additionnalButtonValueString = `${stringifiedNumber}`;

      if (Number(stringifiedNumber) === 1) {
        additionnalButtonValueString += ` ${complementarySingleStateValue}`;
      }  else if (Number(stringifiedNumber) > 1) {
        additionnalButtonValueString += ` ${complementaryMultipleStateValue}`;
      }

      this.setState({
        emptyInputNumber: false,
        buttonScopedValue: additionnalButtonValueString
      })
      onChangeNumber(stringifiedNumber)

    } else {
      this.setState({
        emptyInputNumber: true,
        buttonScopedValue: ""
      })
    }
  }

  _clearNumberValue() {
    const { onChangeNumber } = this.props;
    this.setState({
      emptyInputNumber: true,
      buttonScopedValue: ""
    })
    onChangeNumber("")
  }

  // _onKeyPress({nativeEvent}: object) {
  //   if (nativeEvent.key === 'Backspace') {
  //     const { onChangeNumber } = this.props;
  //     this.setState({
  //       emptyInputNumber: true,
  //       buttonScopedValue: ""
  //     })
  //     onChangeNumber("")
  //   }
  // }

  render() {
    const { emptyInputNumber, buttonScopedValue } = this.state;
    const { placeholder, textColor } = this.props;
  
    return (
      <View style={[styleForm.inputContainer, emptyInputNumber ? styleForm.emptyInput : styleForm.busyInput]}>
        <TextInput
          style={[styleForm.inputText, { color: textColor }]}
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          autoCapitalize="none"
          keyboardAppearance="dark"
          keyboardType="numeric"
          onChangeText={this._writeInputNumber}
          value={buttonScopedValue}
          // onKeyPress={this._onKeyPress}
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