import * as React from "react";
import { TextInput, View } from "react-native";
import SvgUri from "react-native-svg-uri";

import styleForm from "../styles/forms";

interface RInputTextProps {
  placeholder: string,
  placeholderColor: string,
  mainColor: string,
  onChangeText(text: string): void
};

interface RInputTextState {
  emptyInputText: boolean
}

export default class RInputText extends React.PureComponent<RInputTextProps, RInputTextState> {
  constructor(props: RInputTextProps) {
    super(props)
    this._writeInputText = this._writeInputText.bind(this);
  }

  state = {
    emptyInputText: true
  }

  _writeInputText(text: string) {
    const { onChangeText } = this.props;

    onChangeText(text)

    if (text.length > 0) {
      this.setState({
        emptyInputText: false
      })
    } else {
      this.setState({
        emptyInputText: true
      })
    }
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
          placeholderTextColor="#F8F8F8"
          autoCapitalize="none"
          keyboardAppearance="dark"
          onChangeText={this._writeInputText}
        />
        <SvgUri width="25" height="13" source={
          emptyInputText
            ? require("../../../assets/icons/icon--textInputWhite.svg")
            : require("../../../assets/icons/icon--textInputYellow.svg")
        } />
      </View>
    );

  }
}