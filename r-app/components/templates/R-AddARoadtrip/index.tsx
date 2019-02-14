import * as React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import SvgUri from "react-native-svg-uri";
import { observer, inject } from "mobx-react";

import BackArrow from "../../helpers/components/BackArrow";
import RInputText from "../../helpers/components/RInputText";
import RInputDate from "../../helpers/components/RInputDate";
import RInputNumber from "../../helpers/components/RInputNumber";
import RMainButton from "../../helpers/components/RMainButton";

import styles from "./_style";
import { yellowColor } from "../../helpers/styles/_colors";
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
  seatStateValue: string,
  isTwoWaysTrip: boolean,
  isOneWayTrip: boolean,
}


@inject("rootStore")
@observer
class RAddARoadtrip extends React.Component<RAddARoadtripState> {
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
    hourStateValue: "",
    seatStateValue: "",
    roadtripType: "twoWays",
    isTwoWaysTrip: true,
    isOneWayTrip: false,
  }

  _saveRoadtrip() {
    const { navigation } = this.props;

    navigation.navigate('ListRoadtrips');

    this.setState({
      startingCity: "",
      endingCity: "",
      startingDate: "",
      endingDate: "",
      startingHour: 0,
      seatAvailable: 0,
      hourStateValue: "",
      seatStateValue: "",
      roadtripType: "twoWays",
      isTwoWaysTrip: true,
      isOneWayTrip: false,
    })
  }

  render() {
    const { seatStateValue, hourStateValue, isOneWayTrip, isTwoWaysTrip } = this.state;
    const { store } = this.props;

    console.log(store);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <BackArrow color="white" />
        </View>
        <ScrollView style={styles.content}>
          <Text style={styles.title}>Your roadtrip</Text>
          <Text>Hello {store.test}</Text>
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
          <View style={styles.roadtripType}>
            <TouchableOpacity style={[styles.roadtripType__container, { marginRight: 10 }]} onPress={() => {
              this.setState({
                isTwoWaysTrip: true,
                isOneWayTrip: false,
                roadtripType: "twoWays"
              })
            }}>
              {
                isTwoWaysTrip
                  ? <SvgUri width="40" height="40" source={require("../../../assets/icons/icon--twoWaystripYellow.svg")} />
                  : <SvgUri width="40" height="40" source={require("../../../assets/icons/icon--twoWaystripGray.svg")} />
              }
              <Text style={[styles.roadtripType__text, isTwoWaysTrip && { color: yellowColor.light }]}>Two ways trip</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.roadtripType__container, { marginLeft: 10 }]} onPress={() => {
              this.setState({
                isTwoWaysTrip: false,
                isOneWayTrip: true,
                roadtripType: "oneWay"
              })
            }}>
              {
                isOneWayTrip
                  ? <SvgUri width="40" height="40" source={require("../../../assets/icons/icon--oneWaytripYellow.svg")} />
                  : <SvgUri width="40" height="40" source={require("../../../assets/icons/icon--oneWaytripGray.svg")} />
              }
              <Text style={[styles.roadtripType__text, isOneWayTrip && { color: yellowColor.light }]}>One way trip</Text>
            </TouchableOpacity>
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