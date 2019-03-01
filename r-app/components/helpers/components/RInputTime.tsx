import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SvgUri from "react-native-svg-uri";
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from "moment";

import styleForm from "../styles/forms";
import { fontWhiteColor, fontPlaceholderColor } from "../styles/colors";

interface RInputNumberProps {
  placeholder: string,
  complementaryStateValue: string,
  textColor: string,
  onChangeNumber(seats: string): void
};

interface RInputNumberState {
  time: string,
  emptyInputNumber: boolean,
  isTimePickerVisible: boolean
}

export default class RInputNumber extends React.PureComponent<RInputNumberProps, RInputNumberState> {
  constructor(props: RInputNumberProps) {
    super(props)

    this._showTimePicker = this._showTimePicker.bind(this);
    this._hideTimePicker = this._hideTimePicker.bind(this);
    this._handleTimePicked = this._handleTimePicked.bind(this);
    this._clearTimeValue = this._clearTimeValue.bind(this);

    this.state = {
      time: "",
      emptyInputNumber: true,
      isTimePickerVisible: false
    }
  }

  _showTimePicker() {
    this.setState({
      isTimePickerVisible: true
    })
  }

  _handleTimePicked(time: object) {
    const { onChangeNumber } = this.props;

    const timeReformated = moment(time).format('h:mm A');
    onChangeNumber(timeReformated);

    this.setState({
      time: timeReformated,
      isTimePickerVisible: false
    })
  }

  _hideTimePicker() {
    this.setState({
      isTimePickerVisible: false
    })
  }

  _clearTimeValue() {
    this.setState({
      time: ""
    })
  }

  render() {
    const { emptyInputNumber, isTimePickerVisible, time } = this.state;
    const { placeholder, complementaryStateValue, textColor } = this.props;

    return (
      <View>
        {
          time.length > 0
            ?
            <TouchableOpacity onPress={this._showTimePicker} style={[styleForm.inputContainer, styleForm.busyInput]}>
              <Text style={[styleForm.inputDate, { ...fontWhiteColor }]}>{time}</Text>
              <TouchableOpacity onPress={this._clearTimeValue}>
                <SvgUri width="25" height="13" source={require("../../../assets/icons/icon--deleteBusyInput.svg")} />
              </TouchableOpacity>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={this._showTimePicker} style={[styleForm.inputContainer, styleForm.emptyInput]}>
              <Text style={[styleForm.inputDate, { ...fontPlaceholderColor }]}>{placeholder}</Text>
              <SvgUri width="25" height="13" source={require("../../../assets/icons/icon--numberInputWhite.svg")} />
            </TouchableOpacity>
        }
        <DateTimePicker
          mode="time"
          isVisible={isTimePickerVisible}
          onConfirm={this._handleTimePicked}
          onCancel={this._hideTimePicker}
          is24Hour={false}
        />
      </View>
    );

  }
}