import * as React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from "moment";
import SvgUri from "react-native-svg-uri";

import styleForm from "../styles/forms";

interface RInputDateProps {
  // placeholder: string,
  // placeholderColor: string,
  // mainColor: string,
  // onChangeText(text: string): void
};

interface RInputTextState {
  date: any,
  isDateTimePickerVisible: boolean
}

export default class RInputDate extends React.PureComponent<RInputDateProps, RInputTextState> {

  state = {
    date: moment().format('DD/MM/YYYY'),
    isDateTimePickerVisible: false,
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date: any) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };

  // _writeInputText(text: string) {
  //   const { onChangeText } = this.props;

  //   onChangeText(text)

  //   if (text.length > 0) {
  //     this.setState({
  //       emptyInputText: false
  //     })
  //   } else {
  //     this.setState({
  //       emptyInputText: true
  //     })
  //   }
  // }

  render() {
    const { date } = this.state;
    return (
      <View>
        <TouchableOpacity onPress={this._showDateTimePicker} >
          <Text style={styleForm.inputDate}>Show DatePicker</Text>
          {/* <SvgUri width="30" height="20" source={require("../../../assets/icons/icon--calendar.svg")} /> */}
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
        {/* <DatePicker
          style={{
            width: "100%",
            paddingBottom: 15,
            color: yellowColor.light
          }}
          date="moment"
          mode="date"
          placeholder={date}
          format="DD/MM/YYYY"
          // minDate="2016-05-01"
          // maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput: {
              borderBottomColor: "#FFFFFF", 
              borderBottom: 1
            },
            dateTouchBody: {border: 0},
            // dateIcon: {
            //   position: 'absolute',
            //   left: 0,
            //   top: 4,
            //   marginLeft: 0
            // },
            // dateInput: {
            //   marginLeft: 36
            // }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => { this.setState({ date }) }}
        /> */}

      </View>
    );

  }
}