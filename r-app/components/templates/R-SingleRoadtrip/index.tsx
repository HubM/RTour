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

@inject('rootStore')
@observer
class RSingleRoadtrip extends React.Component<any, RSingleRoadtripState> {
  constructor(props: any) {
    super(props);

    this._joinRoadtrip = this._joinRoadtrip.bind(this);
    this.state = {
      buttonLabel: 'Join'.toUpperCase()
    }

  }

  static navigationOptions = {
    header: null,
  };

  _joinRoadtrip() {
    const { navigation, rootStore } = this.props;
    const { userStore } = rootStore;

    if (userStore.isLoggedIn) {
      console.log("Yeah, you can join the trip")
      navigation.navigate("ListRoadtrips");
    } else {
      console.log("You must be connected to join the trip")
      navigation.navigate("Login");
    }
  }

  render() {
    const { navigation } = this.props;
    const roadtrip = navigation.getParam("roadtrip");

    const { startCity, endCity, hour, owner, seats, calendar, address, roadtripType } = roadtrip;

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
          <View style={styles.roadtripCreator}>
            <SvgUri width="40" height="40" source={require("../../../assets/icons/icon--noProfile.svg")} />
            <Text style={styles.roadtripCreatorName}>{owner.name}</Text>
          </View>
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
        <RButton
          text="Join"
          color={yellowColor.light}
          onPressEvent={this._joinRoadtrip}
          type="main"
        />
      </ScrollView>
    );
  }
}

export default withNavigation(RSingleRoadtrip);