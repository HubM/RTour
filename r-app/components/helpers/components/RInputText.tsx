import * as React from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import SvgUri from "react-native-svg-uri";

import styleForm from "../styles/forms";
import { placeholderColor } from "../styles/_colors";


interface RInputTextProps {
  placeholder: string,
  onChangeText(text: string): void
};

interface RInputTextState {
  emptyInputText: boolean,
  textValue: string
}

export default class RInputText extends React.PureComponent<RInputTextProps, RInputTextState> {
  constructor(props: RInputTextProps) {
    super(props)
    this._writeInputText = this._writeInputText.bind(this);
    this._clearTextValue = this._clearTextValue.bind(this)
  }

  state = {
    emptyInputText: true,
    textValue: ""
  }

  _writeInputText(text: string) {
    const { onChangeText } = this.props;
    const { textValue } = this.state;

    this.setState({
      textValue: text
    })


    if (textValue.length > 0) {
      onChangeText(textValue)
      this.setState({
        emptyInputText: false
      })
    } else {
      this.setState({
        emptyInputText: true
      })
    }
  }

  _clearTextValue() {
    this.setState({
      textValue: "",
      emptyInputText: true
    })
  }

  render() {
    const { emptyInputText } = this.state;
    const { placeholder } = this.props;
    return (
      <View style={[styleForm.inputContainer, emptyInputText ? styleForm.emptyInput : styleForm.busyInput]}>
        <TextInput
          style={styleForm.inputText}
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          autoCapitalize="none"
          keyboardAppearance="dark"
          onChangeText={this._writeInputText}
          value={this.state.textValue}
        />
        {
          emptyInputText
            ?
            <SvgUri width="25" height="13" source={require("../../../assets/icons/icon--textInputWhite.svg")} />
            :
            <TouchableOpacity onPress={this._clearTextValue} style={{ padding: 15, transform: [{ translateX: 15 }, { translateY: -5 }] }}>
              <SvgUri width="25" height="13" source={require("../../../assets/icons/icon--deleteBusyInput.svg")} />
            </TouchableOpacity>
        }

      </View>
    );

  }
}