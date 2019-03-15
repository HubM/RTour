import * as React from "react";
import SvgUri from "react-native-svg-uri";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { observer, inject } from "mobx-react";
import { withNavigation } from 'react-navigation';
import { toJS } from "mobx";

import styles from "./_style";
import { grayColor } from "../../helpers/styles/colors";
import { yellowColor } from "../../helpers/styles/colors";

import BackArrow from "../../helpers/components/BackArrow";
import RInputText from "../../helpers/components/RInputText";
import RInputDate from "../../helpers/components/RInputDate";
import RInputTime from "../../helpers/components/RInputTime";
import RInputNumber from "../../helpers/components/RInputNumber";
import RButton from '../../helpers/components/RButton';

const initialState = {
  address: "",
  startingDate: "",
  duration: 1,
  hour: "",
  owner: {
    name: ""
  },
  roadtripType: "twoWays",
  seats: 1,
  startCity: "",
  endCity: "",
  hourStateValue: "",
  durationStateValue: "",
  seatStateValue: "",
  isTwoWaysTrip: true,
  isOneWayTrip: false
}

interface RAddARoadtripState {
  address: string,
  startingDate: string,
  duration: number
  hour: string,
  owner: {
    name: string
  },
  roadtripType: string,
  seats: number,
  startCity: string,
  endCity: string,
  hourStateValue: string,
  durationStateValue: string,
  seatStateValue: string,
  isTwoWaysTrip: boolean,
  isOneWayTrip: boolean
}

interface RAddARoadtripProps {
  appState: object
}

@inject(stores => ({
  user: toJS(stores.rootStore.userStore.user)
}))
@observer
class RAddARoadtrip extends React.Component<RAddARoadtripProps, RAddARoadtripState> {
  constructor(props: RAddARoadtripProps) {
    super(props);
    this._saveRoadtrip = this._saveRoadtrip.bind(this);
    this.state = initialState;
  }

  static navigationOptions = {
    header: null,
  };

  _saveRoadtrip() {
    const { navigation, user } = this.props;
    const { firstname, lastname, username } = user;

    const { startingDate, hour, roadtripType, seats, startCity, endCity } = this.state;

    const newRoadtrip = {
      address: "20 Place Saint Martial, 33000 Bordeaux",
      calendar: {
        startingDate,
        duration: 1
      },
      hour,
      owner: {
        firstname,
        lastname,
        username
      },
      roadtripType,
      seats,
      startCity,
      endCity
    };

    console.log("NEW TRIP", newRoadtrip)


    // this.setState({
    //   ...initialState
    // })

    // navigation.navigate('ListRoadtrips');
  }



  render() {
    const { hour, seatStateValue, isTwoWaysTrip, isOneWayTrip, durationStateValue } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <BackArrow color="white" />
        </View>
        <ScrollView style={styles.content}>
          <Text style={styles.title}>Your roadtrip</Text>
          <RInputText
            placeholder="Starting City..."
            onChangeText={startCity => this.setState({ startCity })}
            textColor={grayColor.light}
            crossMode="light"
            textContentType="location"
            isSecureText={false}
          />
          <RInputText
            placeholder="Ending City..."
            onChangeText={endCity => this.setState({ endCity })}
            textColor={grayColor.light}
            crossMode="light"
            textContentType="location"
            isSecureText={false}
          />
          <RInputDate
            placeholder="Starting Date..."
            getDate={startingDate => this.setState({ startingDate })}
          />
          <RInputNumber
            placeholder="Duration (1 day)..."
            complementaryStateValue={durationStateValue}
            textColor={grayColor.light}
            onChangeNumber={(duration) => {
              if (Number(duration) === 0) {
                this.setState({
                  durationStateValue: "",
                  duration: Number(duration)
                })
              } else {
                this.setState({
                  durationStateValue: duration,
                  duration: Number(duration)
                })
              }
            }}
          />
          <RInputTime
            placeholder="Starting hour..."
            complementaryStateValue={hour}
            textColor={grayColor.light}
            onChangeNumber={hour => this.setState({ hour })}
          />
          <RInputNumber
            placeholder="1 seat available..."
            complementaryStateValue={seatStateValue}
            textColor={grayColor.light}
            onChangeNumber={(seats) => {
              if (Number(seats) === 0) {
                this.setState({
                  seatStateValue: "",
                  seats: Number(seats)
                })
              } else {
                this.setState({
                  seatStateValue: seats,
                  seats: Number(seats)
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