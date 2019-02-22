import * as React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from "moment";
import SvgUri from "react-native-svg-uri";

import styleForm from "../styles/forms";
import { fontPlaceholderColor, fontWhiteColor } from "../styles/_colors";

interface RInputDateProps {
  placeholder: string,
  getDate(date: string): void,
};

interface RInputTextState {
  date: string,
  isDateTimePickerVisible: boolean
}

export default class RInputDate extends React.PureComponent<RInputDateProps, RInputTextState> {
  constructor(props: RInputDateProps) {
    super(props);

    this._showDateTimePicker = this._showDateTimePicker.bind(this);
    this._hideDateTimePicker = this._hideDateTimePicker.bind(this);
    this._handleDatePicked = this._handleDatePicked.bind(this);
    this._clearDateValue = this._clearDateValue.bind(this);

    this.state = {
      date: "",
      isDateTimePickerVisible: false,
    }
  }

  _showDateTimePicker() {
    this.setState({ isDateTimePickerVisible: true });
  }

  _hideDateTimePicker() {
    this.setState({ isDateTimePickerVisible: false });
  }

  _handleDatePicked(date: object) {
    const { getDate } = this.props;

    const dateStringified = moment(date).format('DD/MM/YYYY');

    this.setState({
      date: dateStringified
    })
    this._hideDateTimePicker();

    getDate(dateStringified);
  };

  _clearDateValue() {
    this.setState({
      date: ""
    })
  }

  render() {
    const { placeholder } = this.props;
    const { date, isDateTimePickerVisible } = this.state;

    return (
      <View>
        {
          date.length > 0
            ?
            <TouchableOpacity onPress={this._showDateTimePicker} style={[styleForm.inputContainer, styleForm.busyInput]}>
              <Text style={[styleForm.inputDate, { ...fontWhiteColor }]}>{date}</Text>
              <TouchableOpacity onPress={this._clearDateValue}>
                <SvgUri width="25" height="13" source={require("../../../assets/icons/icon--deleteBusyInput.svg")} />
              </TouchableOpacity>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={this._showDateTimePicker} style={[styleForm.inputContainer, styleForm.emptyInput]}>
              <Text style={[styleForm.inputDate, { ...fontPlaceholderColor }]}>{placeholder}</Text>
              <SvgUri width="30" height="20" source={require("../../../assets/icons/icon--calendarWhite.svg")} />
            </TouchableOpacity>
        }
        <DateTimePicker
          isVisible={isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    );

  }
}