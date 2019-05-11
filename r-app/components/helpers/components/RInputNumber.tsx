import * as React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
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
  isAdditionnalContentShowable: boolean,
  content: string,
  additionnalContent: string
}

const initialState = {
  emptyInputNumber: true,
  isAdditionnalContentShowable: false,
  content: "",
  additionnalContent: ""
}

export default class RInputNumber extends React.PureComponent<RInputNumberProps, RInputNumberState> {
  constructor(props: RInputNumberProps) {
    super(props)
    this._writeInputNumber = this._writeInputNumber.bind(this);
    this._clearNumberValue = this._clearNumberValue.bind(this);
  }

  state = initialState;

  _writeInputNumber(stringifiedNumber: string) {

    if (stringifiedNumber !== "") {
      const { onChangeNumber, complementarySingleStateValue, complementaryMultipleStateValue } = this.props;
      let additionnalContent = ``;

      if (Number(stringifiedNumber) === 1) {
        console.log(complementarySingleStateValue, typeof complementarySingleStateValue)
        additionnalContent += ` ${complementarySingleStateValue}`;
      }  else if (Number(stringifiedNumber) > 1) {
        console.log(complementaryMultipleStateValue, typeof complementaryMultipleStateValue)
        additionnalContent += ` ${complementaryMultipleStateValue}`;
      }

      this.setState({
        emptyInputNumber: false,
        isAdditionnalContentShowable: true,
        content: stringifiedNumber,
        additionnalContent: additionnalContent
      })
      onChangeNumber(stringifiedNumber)

    } else {
      this.setState(initialState)
    }
  }

  _clearNumberValue() {
    const { onChangeNumber } = this.props;
    this.setState(initialState)
    onChangeNumber("")
  }

  render() {
    const { emptyInputNumber, content, additionnalContent, isAdditionnalContentShowable } = this.state;
    const { placeholder, textColor } = this.props;
  
    return (
      <View style={[styleForm.inputContainer, emptyInputNumber ? styleForm.emptyInput : styleForm.busyInput]}>
        <TextInput
          style={[styleForm.inputText, { 
            color: textColor,
            position: "relative",
            padding: 0,
            margin: 0
          }]}
          underlineColorAndroid={"transparent"}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          autoCapitalize={"none"}
          keyboardAppearance={"dark"}
          keyboardType={'numeric'}
          onChangeText={this._writeInputNumber}
          value={content}
        />
        {
          isAdditionnalContentShowable
          && 
          <View style={styleForm.additionnalContent__container}>
            <Text style={styleForm.additionnalContent__text}>{additionnalContent}</Text>
          </View>
        }
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