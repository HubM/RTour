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
}))
@observer
class RSingleRoadtrip extends React.Component<any, RSingleRoadtripState, RSingleRoadtripProps> {
  constructor(props: RSingleRoadtripProps) {
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
    const { navigation, isLoggedIn } = this.props;

    if (isLoggedIn) {
      navigation.navigate("ListRoadtrips");
    } else {
      navigation.navigate("Login");
    }
  }

  render() {
    const { navigation } = this.props;
    const roadtrip = navigation.getParam("roadtrip");

    const { startCity, endCity, hour, owner, seats, calendar, address, roadtripType } = roadtrip;

    let name;

    owner.firstname && owner.lastname
      ? name = `${owner.firstname} ${owner.lastname} (${owner.username})`
      : name = `${owner.username}`

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
            <Text style={styles.roadtripCreatorName}>{name}</Text>
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