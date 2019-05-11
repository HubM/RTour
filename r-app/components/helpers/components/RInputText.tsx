import * as React from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import SvgUri from "react-native-svg-uri";

import styleForm from "../styles/forms";
import { placeholderColor } from "../styles/colors";


interface RInputTextProps {
  placeholder: string,
  onChangeText(text: string): void,
  textColor: string,
  crossMode: string,
  textContentType: string,
  isSecureText: boolean,
};

interface RInputTextState {
  emptyInputText: boolean,
  textValue: string
}

export default class RInputText extends React.PureComponent<RInputTextProps, RInputTextState> {
  constructor(props: RInputTextProps) {
    super(props)
    this._sendText = this._sendText.bind(this);
    this._clearTextValue = this._clearTextValue.bind(this)

    this.state = {
      emptyInputText: true,
      textValue: ""
    }
  }

  _sendText() {
    const { textValue } = this.state;
    const { onChangeText } = this.props;
    if (textValue.length > 0) {
      onChangeText(textValue)
      this.setState({
        emptyInputText: false
      })
    } else {
      this.setState({
        emptyInputText: true,
        textValue: ""
      })
    }
  }

  _clearTextValue() {
    const { onChangeText } = this.props;
    this.setState({
      textValue: "",
      emptyInputText: true
    }, () => {
      onChangeText("")
    })
  }

  render() {
    const { emptyInputText, textValue } = this.state;
    const { placeholder, textColor, crossMode, textContentType, isSecureText } = this.props;

    let secureContext;

    isSecureText
      ? secureContext = true
      : secureContext = false

    return (
      <View style={[styleForm.inputContainer, emptyInputText ? styleForm.emptyInput : styleForm.busyInput ]}>
        <TextInput
          style={[styleForm.inputText, { color: textColor }, {textAlignVertical: 'top'}, {marginTop: -5}]}
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          autoCapitalize="none"
          keyboardAppearance="dark"
          onChangeText={text => {
            this.setState(
              { textValue: text },
            () => {
              this._sendText()
            })}
          }
          value={textValue}
          textContentType={textContentType}
          secureTextEntry={secureContext}
        />
        {
          emptyInputText
            ?
            <SvgUri width="25" height="13" source={require("../../../assets/icons/icon--textInputWhite.svg")} />
            :
            <TouchableOpacity onPress={this._clearTextValue} style={{ padding: 10, transform: [{translateX:5},{translateX:5}]}}>
              {
                crossMode === "light"
                  ?
                  <SvgUri width="25" height="13" source={require("../../../assets/icons/icon--deleteBusyInputLight.svg")} />
                  :
                  <SvgUri width="25" height="13" source={require("../../../assets/icons/icon--deleteBusyInputDark.svg")} />
              }
            </TouchableOpacity>
        }
      </View>
    );

  }
}