import * as React from "react";
import { TextInput } from "react-native";

import stylesForms from "../styles/forms";

interface RInputTextProps {
  placeholder: string,
  placeholderColor: string,
  mainColor: string
};

export default class BackArrow extends React.PureComponent<RInputTextProps> {
  constructor(props: RInputTextProps) {
    super(props)
    this._writeInputText = this._writeInputText.bind(this);
  }

  state = {
    emptyInputText: true
  }

  _writeInputText(text: string) {
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
    const { placeholder } = this.props;
    return (
      <TextInput
        style={stylesForms.inputText}
        underlineColorAndroid={emptyInputText ? "#ffffff" : "#FFF784"}
        placeholder={placeholder}
        placeholderTextColor="#F8F8F8"
        autoCapitalize="none"
        keyboardAppearance="dark"
        onChangeText={this._writeInputText}
      />
    );

  }
}