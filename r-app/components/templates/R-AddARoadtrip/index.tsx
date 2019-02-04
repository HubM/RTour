import * as React from "react";
import { Text, View, TouchableOpacity, TextInput, ScrollView } from "react-native";

import BackArrow from "../../helpers/components/BackArrow";
import RInputText from "../../helpers/components/RInputText";
import RInputDate from "../../helpers/components/RInputDate";
import RInputNumber from "../../helpers/components/RInputNumber";
import RMainButton from "../../helpers/components/RMainButton";

import styles from "./_style";
import { withNavigation } from 'react-navigation';

interface RAddARoadtripState {
  startingCity: string,
  endingCity: string,
  startingDate: string,
  endingDate: string,
  seatAvailable: number
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
    seatAvailable: 0
  }

  _saveRoadtrip() {
    const { navigation } = this.props;

    console.log(this.state);

    navigation.navigate('ListRoadtrips');
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
              onChangeNumber={(seats) => this.setState({ seatAvailable: Number(seats) })}
            />
            {/* <TouchableOpacity style={buttons.centered} onPress={this._saveRoadtrip}>
              <SvgUri width="50" height="50" source={require("../../../assets/icons/yes.svg")} />
            </TouchableOpacity> */}
          </ScrollView>
          <RMainButton
            text="Create"
            color="yellow"
            onPressEvent={this._saveRoadtrip}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(RAddARoadtrip);