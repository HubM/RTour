import * as React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from "moment";
import SvgUri from "react-native-svg-uri";

import styleForm from "../styles/forms";
import { fontWhiteColor, fontYellowColor } from "../styles/_colors";

interface RInputDateProps {
  placeholder: string,
  getDate(date: string): void,
};

interface RInputTextState {
  date: string,
  isDateTimePickerVisible: boolean
}

export default class RInputDate extends React.PureComponent<RInputDateProps, RInputTextState> {

  state = {
    date: "",
    isDateTimePickerVisible: false,
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date: object) => {
    const dateStringified = moment(date).format('DD/MM/YYYY');

    this.setState({
      date: dateStringified
    })
    this._hideDateTimePicker();
    this.props.getDate(dateStringified);
  };

  render() {
    const { placeholder } = this.props;
    const { date } = this.state;

    return (
      <View>
        {
          date.length > 0
            ?
            <TouchableOpacity onPress={this._showDateTimePicker} style={[styleForm.inputContainer, styleForm.busyInput]}>
              <Text style={[styleForm.inputDate, { ...fontYellowColor }]}>{date}</Text>
              <SvgUri width="30" height="20" source={require("../../../assets/icons/icon--calendarYellow.svg")} />
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={this._showDateTimePicker} style={[styleForm.inputContainer, styleForm.emptyInput]}>
              <Text style={[styleForm.inputDate, { ...fontWhiteColor }]}>{placeholder}</Text>
              <SvgUri width="30" height="20" source={require("../../../assets/icons/icon--calendarWhite.svg")} />
            </TouchableOpacity>
        }
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    );

  }
}