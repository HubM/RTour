import * as React from "react";
import { Text, View, TouchableOpacity, TextInput, ScrollView } from "react-native";

import BackArrow from "../../helpers/components/BackArrow";
import RInputText from "../../helpers/components/RInputText";
import RInputDate from "../../helpers/components/RInputDate";
import RInputNumber from "../../helpers/components/RInputNumber";
import RMainButton from "../../helpers/components/RMainButton";

import styles from "./_style";
import { convertToUkHour } from "../../helpers/index";
import { withNavigation } from 'react-navigation';

interface RAddARoadtripState {
  startingCity: string,
  endingCity: string,
  startingDate: string,
  endingDate: string,
  startingHour: number,
  seatAvailable: number,
  roadtripType: string,
  hourStateValue: string,
  seatStateValue: string
}

class RAddARoadtrip extends React.PureComponent<any, RAddARoadtripState> {
  constructor(props: any) {
    super(props);
    this._saveRoadtrip = this._saveRoadtrip.bind(this);
  }

  static navigationOptions = {
    header: null,
  };

  state = {
    startingCity: "",
    endingCity: "",
    startingDate: "",
    endingDate: "",
    startingHour: 0,
    seatAvailable: 0,
    roadtripType: "",
    hourStateValue: "",
    seatStateValue: ""
  }

  _saveRoadtrip() {
    const { navigation } = this.props;

    console.log(this.state);

    navigation.navigate('ListRoadtrips');
  }

  render() {
    const { seatStateValue, hourStateValue } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <BackArrow color="white" />
        </View>
        <ScrollView style={styles.content}>
          <Text style={styles.title}>Your roadtrip</Text>
          <RInputText
            placeholder="Starting City..."
            onChangeText={(text) => this.setState({ startingCity: text })}
          />
          <RInputText
            placeholder="Ending City..."
            onChangeText={(text) => this.setState({ endingCity: text })}
          />
          <RInputDate
            placeholder="Starting Date..."
            getDate={date => this.setState({ startingDate: date })}
          />
          <RInputDate
            placeholder="Ending Date..."
            getDate={date => this.setState({ endingDate: date })}
          />
          <RInputNumber
            placeholder="Starting hour..."
            complementaryStateValue={hourStateValue}
            onChangeNumber={(hour) => {
              if (Number(hour) === 0) {
                this.setState({
                  hourStateValue: "",
                  startingHour: Number(hour)
                })
              } else {
                this.setState({
                  hourStateValue: convertToUkHour(hour),
                  startingHour: Number(hour)
                })
              }
            }}
          />
          <RInputNumber
            placeholder="0 seat available..."
            complementaryStateValue={seatStateValue}
            onChangeNumber={(seats) => {
              if (Number(seats) === 0) {
                this.setState({
                  seatStateValue: "",
                  seatAvailable: Number(seats)
                })
              } else {
                this.setState({
                  seatStateValue: Number(seats) > 1 ? `${seats} seats` : `${seats} seat`,
                  seatAvailable: Number(seats)
                })
              }
            }}
          />
          <View>

          </View>
          <RMainButton
            text="Create"
            color="yellow"
            onPressEvent={this._saveRoadtrip}
          />
        </ScrollView>
      </View>
    );
  }
}

export default withNavigation(RAddARoadtrip);