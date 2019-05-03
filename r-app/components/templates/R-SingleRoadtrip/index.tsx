import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView, FlatList } from "react-native";
import SvgUri from 'react-native-svg-uri';
import { inject, observer } from "mobx-react";
import RButton from "../../helpers/components/RButton";

import BackArrow from "../../helpers/components/BackArrow";
import styles from "./_style";
import { withNavigation, NavigationEvents } from 'react-navigation';
import { yellowColor } from '../../helpers/styles/colors';
import { toJS } from 'mobx';

interface RSingleRoadtripState {
  buttonLabel: string,
  isOwner: boolean
}

interface RSingleRoadtripProps {
  user: object,
  isLoggedIn: boolean,
  deleteOwnRoadtrip(): void
}

@inject(stores => ({
  isLoggedIn: stores.rootStore.userStore.isLoggedIn,
  user: toJS(stores.rootStore.userStore.user),
  deleteOwnRoadtrip: stores.rootStore.roadtripsStore.deleteOwnRoadtrip,
  addRiderToRoadtrip: stores.rootStore.roadtripsStore.addRiderToRoadtrip,
  setSingleRoadtrip: stores.rootStore.singleRoadtripStore.setSingleRoadtrip,
  singleRoadtrip: stores.rootStore.singleRoadtripStore.singleRoadtrip
}))
@observer
class RSingleRoadtrip extends React.Component<any, RSingleRoadtripState, RSingleRoadtripProps> {
  constructor(props: RSingleRoadtripProps) {
    super(props);
    this._loginUser = this._loginUser.bind(this);
    this._setSingleRoadtrip = this._setSingleRoadtrip.bind(this);
    this._joinRoadtrip = this._joinRoadtrip.bind(this);
    this._goToProfileSection = this._goToProfileSection.bind(this);
    this._manageRiderRequest = this._manageRiderRequest.bind(this);
    this._deleteRoadtrip = this._deleteRoadtrip.bind(this);
    this.state = {
      isOwner: false,
      buttonLabel: ""
    }
  }

  static navigationOptions = {
    header: null,
  };

  _setSingleRoadtrip() {
    const { setSingleRoadtrip, navigation } = this.props;
    const roadtrip = navigation.getParam("roadtrip");
    setSingleRoadtrip(roadtrip);
  }

  componentDidMount() {
    this._setSingleRoadtrip();
  }

  static getDerivedStateFromProps(props, state) {
    const { isLoggedIn, user, navigation } = props;
    const roadtrip = navigation.getParam("roadtrip");
    const { owner } = roadtrip;

    if (isLoggedIn) {
      if (user.username === owner.username) {
        return Object.assign(state, {
          isOwner: true,
          buttonLabel: 'Delete'.toUpperCase()
        })
      } else {
        return Object.assign(state, {
          isOwner: false,
          buttonLabel: 'Join'.toUpperCase()
        })
      }
    } else {
      return Object.assign(state, {
        isOwner: false,
        buttonLabel: 'Connect'.toUpperCase()
      })
    }
  }

  _loginUser() {
    const { navigation } = this.props;
    navigation.navigate("Login");
  }

  _joinRoadtrip() {
    const { navigation, user, addRiderToRoadtrip } = this.props;
    const { _id, username } = user;
    const roadtrip = navigation.getParam("roadtrip");

    addRiderToRoadtrip(roadtrip._id, {
      _id,
      username
    })
    navigation.pop();
  }

  _deleteRoadtrip() {
    const { deleteOwnRoadtrip, navigation } = this.props;
    const roadtrip = navigation.getParam("roadtrip");

    deleteOwnRoadtrip(roadtrip._id);
    navigation.navigate("ListRoadtrips", { roadtripsHaveChanged: true })
  }

  _goToProfileSection(userId: string) {
    const { navigation } = this.props;
    navigation.navigate({ key: Math.random() * 10000, routeName: "Profile", params: { userId } })
  }

  _manageRiderRequest(userId: string) {
    const { navigation } = this.props;
    const roadtrip = navigation.getParam("roadtrip");

    navigation.navigate({
      key: Math.random() * 10000,
      routeName: "ManageRider",
      params: {
        userId,
        roadtripId: roadtrip._id,
      }
    })
  }

  render() {
    const { isOwner, buttonLabel } = this.state;
    const { isLoggedIn, user } = this.props;

    const { startCity, endCity, owner, seats, calendar, address, roadtripType, hour, riders } = this.props.singleRoadtrip;

    let name, buttonAction, headerSection, ridersDisplayed, ridersSection;

    if (owner) {
      owner.firstname && owner.lastname
        ? name = `${owner.firstname} ${owner.lastname} (${owner.username})`
        : name = `${owner.username}`
    }

    if (isLoggedIn) {
      if (user.username !== owner.username) {
        buttonAction = <RButton
          text={buttonLabel}
          color={yellowColor.light}
          onPressEvent={this._joinRoadtrip}
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

    if (isOwner) {
      headerSection =
        <View style={styles.headerOwner}>
          <BackArrow color="white" navigationRoute="ListRoadtrips" />
          <TouchableOpacity onPress={this._deleteRoadtrip}>
            <Text style={styles.deleteRoadtripBtn}>{"Delete".toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
    } else {
      headerSection =
        <View style={styles.header}>
          <BackArrow color="white" navigationRoute="ListRoadtrips" />
        </View>
    }

    if (riders && riders.length > 0) {
      if (isOwner) {
        ridersDisplayed = riders;
      } else {
        ridersDisplayed = riders.filter((rider: object) => rider.isValidated);
      }

      if (ridersDisplayed.length > 0) {
        ridersSection =
          <View>
            <Text style={styles.sectionTitle}>Riders 🍻</Text>
            <View>
              <FlatList
                data={ridersDisplayed}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) =>
                  (
                    <View>
                      <TouchableOpacity style={styles.singleRider} onPress={() => this._manageRiderRequest(item._id)}>
                        <SvgUri width="20" height="20" source={require("../../../assets/icons/icon--noProfile.svg")} />
                        <Text style={styles.roadtripCreatorName}>{item.username}</Text>
                      </TouchableOpacity>
                    </View>
                  )
                }
              />
            </View>
          </View>
      }
    }

    return (
      <ScrollView style={styles.container}>
        <NavigationEvents
          onWillFocus={() => this._setSingleRoadtrip()}
        />
        {headerSection}
        <View style={styles.content}>
          <View style={styles.roadtripTitle}>
            {

            }
            <Text style={styles.roadtripTitleStartCity}>{startCity}</Text>
            <Text style={styles.roadtripTitleEndCity}>{endCity}</Text>
          </View>
          <TouchableOpacity style={styles.roadtripCreator} onPress={() => this._goToProfileSection(owner._id)}>
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
          {ridersSection}
        </View>
        {buttonAction}
      </ScrollView>
    );
  }
}

export default withNavigation(RSingleRoadtrip);