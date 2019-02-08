import * as React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import SvgUri from "react-native-svg-uri";

import styleForm from "../styles/forms";
import { placeholderColor } from "../styles/_colors";

interface RInputNumberProps {
  placeholder: string,
  complementaryStateValue: string,
  onChangeNumber(seats: string): void
};

interface RInputNumberState {
  emptyInputNumber: boolean,
}

export default class RInputNumber extends React.PureComponent<RInputNumberProps, RInputNumberState> {
  constructor(props: RInputNumberProps) {
    super(props)
    this._writeInputNumber = this._writeInputNumber.bind(this);
    this._clearNumberValue = this._clearNumberValue.bind(this);
  }

  state = {
    emptyInputNumber: true,
  }

  _writeInputNumber(stringifiedNumber: string) {

    if (stringifiedNumber !== "") {
      const { onChangeNumber } = this.props;

      this.setState({
        emptyInputNumber: false
      })
      onChangeNumber(stringifiedNumber)
    } else {
      this.setState({
        emptyInputNumber: true
      })
    }
  }

  _clearNumberValue() {
    const { onChangeNumber } = this.props;
    this.setState({
      emptyInputNumber: true
    })
    onChangeNumber("")
  }

  render() {
    const { emptyInputNumber } = this.state;
    const { placeholder, complementaryStateValue } = this.props;

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
          value={complementaryStateValue}
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