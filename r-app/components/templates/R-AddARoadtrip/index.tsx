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
import MessageManager from "../../helpers/components/MessageManager";

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
  isOneWayTrip: false,
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
  isOneWayTrip: boolean,
}

interface RAddARoadtripProps {
  user: {
    firstname: string,
    lastname: string,
    username: string
  },
  addANewRoadtrip(roadtrip: object): void
}

@inject(stores => ({
  user: toJS(stores.rootStore.userStore.user),
  addANewRoadtrip: stores.rootStore.roadtripsStore.addANewRoadtrip,
  setMessage: stores.rootStore.messageManagerStore.setMessage,
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
    const { navigation, user, addANewRoadtrip, setMessage } = this.props;

    const { _id, firstname, lastname, username, deviceToken } = user;

    const { startingDate, hour, roadtripType, seats, startCity, endCity, duration } = this.state;

    const newRoadtrip = {
      roadtrip: {
        address: "20 Place Saint Martial, 33000 Bordeaux",
        calendar: {
          startingDate,
          duration
        },
        hour,
        owner: {
          _id,
          firstname,
          lastname,
          username,
          deviceToken
        },
        roadtripType,
        seats,
        startCity,
        endCity
      }
    };

    if (!startCity || !endCity || !startingDate || !hour) {
      setMessage({
        status: "error",
        text: "You must complete required fields 🙏"
      })
    } else {
      
      setMessage({
        status: "info-positive",
        text: "Your roadtrip has created 🎉"
      })
      
      this.setState({
        ...initialState
      })


      addANewRoadtrip(newRoadtrip);
      navigation.pop();
    }
  }

  render() {
    const { hour, seatStateValue, isTwoWaysTrip, isOneWayTrip, durationStateValue, seats } = this.state;

    return (
      <View style={styles.container}>
        <MessageManager />
        <View style={styles.header}>
          <BackArrow color="white" navigationRoute="back" />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Your roadtrip</Text>
          <Text style={styles.requiredFieldsDesc}>⚠️ Fields with (*) are required</Text>
        </View>
        <ScrollView style={[styles.content, { paddingTop: 10}]}>
          <RInputText
            placeholder="*Starting City..."
            onChangeText={startCity => this.setState({ startCity })}
            textColor={grayColor.light}
            crossMode="light"
            textContentType="location"
            isSecureText={false}
          />
          <RInputText
            placeholder="*Ending City..."
            onChangeText={endCity => this.setState({ endCity })}
            textColor={grayColor.light}
            crossMode="light"
            textContentType="location"
            isSecureText={false}
          />
          <RInputDate
            placeholder="*Starting Date..."
            getDate={startingDate => this.setState({ startingDate })}
          />
          <RInputNumber
            placeholder="*Duration... (1 day)"
            complementarySingleStateValue={"day"}
            complementaryMultipleStateValue={"days"}
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
            placeholder="*Starting hour..."
            complementaryStateValue={hour}
            textColor={grayColor.light}
            onChangeNumber={hour => this.setState({ hour })}
          />
          <RInputNumber
            placeholder="*1 seat available..."
            complementarySingleStateValue={"seat"}
            complementaryMultipleStateValue={"seats"}
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