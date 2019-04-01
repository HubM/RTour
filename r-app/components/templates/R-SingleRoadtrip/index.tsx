import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import SvgUri from 'react-native-svg-uri';
import { inject, observer } from "mobx-react";
import RButton from "../../helpers/components/RButton";

import BackArrow from "../../helpers/components/BackArrow";
import styles from "./_style";
import { withNavigation } from 'react-navigation';
import { yellowColor } from '../../helpers/styles/colors';

interface RSingleRoadtripState {
  buttonLabel: string;
}

interface RSingleRoadtripProps {
  isLoggedIn: boolean
}

@inject(stores => ({
  isLoggedIn: stores.rootStore.userStore.isLoggedIn,
  user: stores.rootStore.userStore.user
}))
@observer
class RSingleRoadtrip extends React.Component<any, RSingleRoadtripState, RSingleRoadtripProps> {
  constructor(props: RSingleRoadtripProps) {
    super(props);
    this._loginUser = this._loginUser.bind(this);
    this._joinRoadtrip = this._joinRoadtrip.bind(this);
    this._deleteRoadtrip = this._deleteRoadtrip.bind(this);
    this.state = {
      buttonLabel: ""
    }
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const { isLoggedIn, user, navigation } = this.props;
    const roadtrip = navigation.getParam("roadtrip");

    const { owner } = roadtrip;
    if (isLoggedIn) {
      if (user.username !== owner.username) {
        this.setState({ buttonLabel: 'Join'.toUpperCase() })
      } else {
        this.setState({ buttonLabel: 'Delete'.toUpperCase() })
      }
    } else {
      this.setState({ buttonLabel: 'Connect'.toUpperCase() })
    }
  }

  _loginUser() {
    const { navigation } = this.props;
    navigation.navigate("Login");
  }

  _joinRoadtrip() {
    const { navigation } = this.props;
    navigation.navigate("ListRoadtrips");
  }

  _deleteRoadtrip() {
    console.log("We are going to delete this roadtrip");
  }


  render() {
    const { navigation, isLoggedIn, user } = this.props;
    const { buttonLabel } = this.state;
    const roadtrip = navigation.getParam("roadtrip");

    const { startCity, endCity, hour, owner, seats, calendar, address, roadtripType } = roadtrip;

    let name;
    let buttonAction;


    owner.firstname && owner.lastname
      ? name = `${owner.firstname} ${owner.lastname} (${owner.username})`
      : name = `${owner.username}`

    if (isLoggedIn) {
      if (user.username !== owner.username) {
        buttonAction = <RButton
          text={buttonLabel}
          color={yellowColor.light}
          onPressEvent={this._joinRoadtrip}
          type="main"
        />
      } else {
        buttonAction = <RButton
          text={buttonLabel}
          color={yellowColor.light}
          onPressEvent={this._deleteRoadtrip}
          type="main"
        />
      }
    } else {
      buttonAction = <RButton
        text={buttonLabel}
        color={yellowColor.light}
        onPressEvent={this._loginUser}
        type="main"
      />
    }


    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <BackArrow color="white" />
        </View>
        <View style={styles.content}>
          <View style={styles.roadtripTitle}>
            <Text style={styles.roadtripTitleStartCity}>{startCity}</Text>
            <Text style={styles.roadtripTitleEndCity}>{endCity}</Text>
          </View>
          <TouchableOpacity style={styles.roadtripCreator} onPress={() => navigation.navigate("Profile", { profileUser: owner.username })}>
            <SvgUri width="40" height="40" source={require("../../../assets/icons/icon--noProfile.svg")} />
            <Text style={styles.roadtripCreatorName}>{name}</Text>
          </TouchableOpacity>
          <View style={styles.roadtripSubInfos}>
            {
              seats &&
              <View style={styles.roadtripSubInfos__single}>
                <SvgUri width="20" height="20" source={require("../../../assets/icons/icon--seatsAvailable.svg")} />
                <Text style={styles.roadtripSubInfos__single__text}>
                  {seats} {seats > 1 ? "seats available" : "seat available"}
                </Text>
              </View>
            }
            {
              (calendar && calendar.startingDate ||
                calendar && calendar.duration) &&
              <View style={styles.roadtripSubInfos__single}>
                <SvgUri width="20" height="20" source={require("../../../assets/icons/icon--calendarWhite.svg")} />
                <Text style={styles.roadtripSubInfos__single__text}>
                  {
                    calendar.startingDate && calendar.startingDate
                  }{
                    calendar.duration && calendar.duration > 1
                      ? `- ${calendar.duration} days`
                      : `- ${calendar.duration} day`
                  }
                </Text>
              </View>
            }
            {
              address &&
              <View style={styles.roadtripSubInfos__single}>
                <SvgUri width="20" height="20" source={require("../../../assets/icons/icon--address.svg")} />
                <Text style={styles.roadtripSubInfos__single__text}>
                  {address}
                </Text>
              </View>
            }
            {
              hour &&
              <View style={styles.roadtripSubInfos__single}>
                <SvgUri width="20" height="20" source={require("../../../assets/icons/icon--hour.svg")} />
                <Text style={styles.roadtripSubInfos__single__text}>
                  {hour}
                </Text>
              </View>
            }
            {
              (roadtripType) && roadtripType === "roundTrip"
                ? <View style={styles.roadtripSubInfos__single}>
                  <SvgUri width="20" height="20" source={require("../../../assets/icons/icon--roundTripWhite.svg")} />
                  <Text style={styles.roadtripSubInfos__single__text}>Round Trip</Text>
                </View>
                : <View style={styles.roadtripSubInfos__single}>
                  <SvgUri width="20" height="20" source={require("../../../assets/icons/icon--singleTripWhite.svg")} />
                  <Text style={styles.roadtripSubInfos__single__text}>Single Trip</Text>
                </View>
            }
          </View>
        </View>
        {
          buttonAction
        }
      </ScrollView>
    );
  }
}

export default withNavigation(RSingleRoadtrip);