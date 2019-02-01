import * as React from "react";
import { Text, View, TouchableOpacity, TextInput, ScrollView } from "react-native";

import BackArrow from "../../helpers/components/BackArrow";
import RInputText from "../../helpers/components/RInputText";
import RInputDate from "../../helpers/components/RInputDate";
import RInputNumber from "../../helpers/components/RInputNumber";

import { grayColor, yellowColor } from "../../helpers/styles/_colors";

import styles from "./_style";

interface RAddARoadtripState {
  startingCity: string,
  endingCity: string,
  startingDate: string,
  endingDate: string,
  seatAvailable: number
}

export default class RAddARoadtrip extends React.PureComponent<any, RAddARoadtripState> {
  static navigationOptions = {
    header: null,
  };

  state = {
    startingCity: "",
    endingCity: "",
    startingDate: "",
    endingDate: "",
    seatAvailable: 0
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <BackArrow color="white" />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Your roadtrip</Text>
          <ScrollView>
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
              placeholder="Seats available..."
              onChangeNumber={(seats) => this.setState({ seatAvailable: seats })}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}