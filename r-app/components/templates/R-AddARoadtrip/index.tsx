import * as React from "react";
import SvgUri from "react-native-svg-uri";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { observer, inject } from "mobx-react";
import { withNavigation } from 'react-navigation';

import rootStore from '../../../store';
import styles from "./_style";
import { grayColor } from "../../helpers/styles/colors";
import { yellowColor } from "../../helpers/styles/colors";
import { convertToUkHour } from "../../helpers/index";

import BackArrow from "../../helpers/components/BackArrow";
import RInputText from "../../helpers/components/RInputText";
import RInputDate from "../../helpers/components/RInputDate";
import RInputTime from "../../helpers/components/RInputTime";
import RInputNumber from "../../helpers/components/RInputNumber";
import RButton from '../../helpers/components/RButton';

const initialState = {
  startingCity: "",
  endingCity: "",
  startingDate: "",
  endingDate: "",
  startingHour: "",
  seatAvailable: 0,
  hourStateValue: "",
  seatStateValue: "",
  roadtripType: "twoWays",
  isTwoWaysTrip: false,
  isOneWayTrip: false,
}

interface RAddARoadtripState {
  startingCity: string,
  endingCity: string,
  startingDate: string,
  endingDate: string,
  startingHour: string,
  seatAvailable: number,
  roadtripType: string,
  hourStateValue: string,
  seatStateValue: string,
  isTwoWaysTrip: boolean,
  isOneWayTrip: boolean,
}

interface RAddARoadtripProps {
  roadtripsStore?: rootStore,
  appState: object
}

@inject(stores => ({
  roadtripsStore: stores.rootStore.roadtripsStore as rootStore
}))
@observer
class RAddARoadtrip extends React.Component<RAddARoadtripProps, RAddARoadtripState> {
  constructor(props: RAddARoadtripProps) {
    super(props);
    this._saveRoadtrip = this._saveRoadtrip.bind(this);
    this.state = initialState
  }

  static navigationOptions = {
    header: null,
  };

  _saveRoadtrip() {
    const { navigation, roadtripsStore } = this.props;

    const newRoadtrip = this.state;
    console.log("NEW TRIP", newRoadtrip)
    roadtripsStore.setNewRoadtrip(newRoadtrip);

    this.setState({
      ...initialState
    })

    navigation.navigate('ListRoadtrips');
  }

  render() {
    const { hourStateValue, seatStateValue, isTwoWaysTrip, isOneWayTrip } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <BackArrow color="white" />
        </View>
        <ScrollView style={styles.content}>
          <Text style={styles.title}>Your roadtrip</Text>
          <RInputText
            placeholder="Starting City..."
            onChangeText={text => this.setState({ startingCity: text })}
            textColor={grayColor.light}
            crossMode="light"
            textContentType="location"
            isSecureText={false}
          />
          <RInputText
            placeholder="Ending City..."
            onChangeText={text => this.setState({ endingCity: text })}
            textColor={grayColor.light}
            crossMode="light"
            textContentType="location"
            isSecureText={false}
          />
          <RInputDate
            placeholder="Starting Date..."
            getDate={date => this.setState({ startingDate: date })}
          />
          <RInputDate
            placeholder="Ending Date..."
            getDate={date => this.setState({ endingDate: date })}
          />
          <RInputTime
            placeholder="Starting hour..."
            complementaryStateValue={hourStateValue}
            textColor={grayColor.light}
            onChangeNumber={(hour) => this.setState({ startingHour: hour })}
          />
          <RInputNumber
            placeholder="0 seat available..."
            complementaryStateValue={seatStateValue}
            textColor={grayColor.light}
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
          <RButton
            text="Create"
            color={yellowColor.light}
            onPressEvent={this._saveRoadtrip}
            type="main"
          />
        </ScrollView>
      </View>
    );
  }
}

export default withNavigation(RAddARoadtrip);