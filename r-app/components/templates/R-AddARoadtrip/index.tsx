import * as React from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

import BackArrow from "../../helpers/components/BackArrow";
import RInputText from "../../helpers/components/RInputText";
import RInputDate from "../../helpers/components/RInputDate";

import { grayColor, yellowColor } from "../../helpers/styles/_colors";

import styles from "./_style";

interface RAddARoadtripState {
  startingCity: string,
  endingCity: string
}

export default class RAddARoadtrip extends React.PureComponent<any, RAddARoadtripState> {
  static navigationOptions = {
    header: null,
  };

  state = {
    startingCity: "",
    endingCity: ""
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <BackArrow color="white"/>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Your roadtrip</Text>
          <View>
            <RInputText 
              placeholder="Starting City"
              placeholderColor={grayColor.light}
              mainColor={yellowColor.light}
              onChangeText={(text) => this.setState({ startingCity: text})}
            />
            <RInputText
              placeholder="Ending City"
              placeholderColor={grayColor.light}
              mainColor={yellowColor.light}
              onChangeText={(text) => this.setState({ endingCity: text })}
            />    
            <RInputDate />        
          </View>
        </View>
      </View>
    );
  }
}