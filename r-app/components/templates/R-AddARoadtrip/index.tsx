import * as React from "react";
import SvgUri from "react-native-svg-uri";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { observer, inject } from "mobx-react";
import { withNavigation } from 'react-navigation';

import rootStore from '../../../store';
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
  roadtrip: {
    address: "",
    calendar: {
      startingDate: "",
      duration: 1
    },
    hour: "",
    owner: {
      name: ""
    },
    roadtripType: "",
    seats: 0,
    startCity: "",
    endCity: "",
  },
  hourStateValue: "",
  seatStateValue: "",
  isTwoWaysTrip: true,
  isOneWayTrip: false
}

interface RAddARoadtripState {
  roadtrip: {
    address: string,
    calendar: {
      startingDate: string,
      duration: number
    },
    hour: string,
    owner: {
      name: string
    },
    roadtripType: string,
    seats: number,
    startCity: string,
    endCity: string,
  },
  hourStateValue: string,
  seatStateValue: string,
  isTwoWaysTrip: boolean,
  isOneWayTrip: boolean
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

    const { roadtrip, isTwoWaysTrip, isOneWayTrip } = this.state;

    const { address, calendar, hour, owner, roadtripType, seats, startCity } = roadtrip;


    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <BackArrow color="white" />
        </View>
        <ScrollView style={styles.content}>
          <Text style={styles.title}>Your roadtrip</Text>
          <RInputText
            placeholder="Starting City..."
            onChangeText={startCity => {
              this.setState(prevState => ({
                roadtrip: {
                  ...prevState.roadtrip,
                  startCity
                }
              }))
            }}
            textColor={grayColor.light}
            crossMode="light"
            textContentType="location"
            isSecureText={false}
          />
          <RInputText
            placeholder="Ending City..."
            onChangeText={endCity => {
              this.setState(prevState => ({
                roadtrip: {
                  ...prevState.roadtrip,
                  endCity
                }
              }))
            }}
            textColor={grayColor.light}
            crossMode="light"
            textContentType="location"
            isSecureText={false}
          />
          <RInputDate
            placeholder="Starting Date..."
            getDate={startingDate => {
              this.setState(prevState => ({
                roadtrip: {
                  ...prevState.roadtrip,
                  calendar.startingDate: startingDate
        }
      }))
    }}
  />
          {/* <RInputDate
            placeholder="Ending Date..."  
            getDate={date => this.setState({ endingDate: date })}
          /> */}
          <RInputTime
            placeholder="Starting hour..."
            complementaryStateValue={hour}
            textColor={grayColor.light}
            onChangeNumber={hour => {
              this.setState(prevState => ({
                roadtrip: {
                  ...prevState.roadtrip,
                  hour
                }
              }))
            }}
          />
          <RInputNumber
            placeholder="0 seat available..."
            complementaryStateValue={seatStateValue}
            textColor={grayColor.light}
            onChangeNumber={(seats) => {
              if (Number(seats) === 0) {
                // this.setState({
                //   seatStateValue: "",
                //   seats: Number(seats)
                // })
                this.setState(prevState => ({
                  roadtrip: {
                    ...prevState.roadtrip,
                    seats
                  },
                  seatStateValue: ""
                }))
              } else {
                this.setState({
                  seatStateValue: seats,
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