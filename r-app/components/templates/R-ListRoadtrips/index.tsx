import * as React from "react";
import SvgUri from "react-native-svg-uri";
import { toJS } from "mobx";
import moment from "moment";
import { inject, observer } from 'mobx-react';
import { withNavigation } from "react-navigation";
import { View, Text, TouchableOpacity, FlatList, Dimensions } from "react-native";
import GestureRecognizer from 'react-native-swipe-gestures';

import styles from "./_style";

import Roadtrip from "./_components/Roadtrip";

const width = Dimensions.get('window').width;

interface RListRoadtripsState {
  filterBtn: string,
  date: string
}

interface RListRoadtripsProps {
  isLoggedIn: boolean,
  appState: object,
  getRoadtrips(date: string): void
}

@inject(stores => ({
  isLoggedIn: stores.rootStore.userStore.isLoggedIn,
  roadtrips: toJS(stores.rootStore.roadtripsStore.roadtrips).flat(),
  getRoadtrips: stores.rootStore.roadtripsStore.getRoadtrips,
}))
@observer
class RListRoadtrips extends React.Component<RListRoadtripsProps, RListRoadtripsState> {
  constructor(props: RListRoadtripsProps) {
    super(props);
    this._seeRoadtrip = this._seeRoadtrip.bind(this);
    this._getPreviousRoadtrips = this._getPreviousRoadtrips.bind(this);
    this._getNextRoadtrips = this._getNextRoadtrips.bind(this);

    this.state = {
      filterBtn: "Filter".toUpperCase(),
      date: moment().format('DD/MM/YYYY')
    }
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const { date } = this.state;
    const { getRoadtrips } = this.props;
    getRoadtrips(date);
  }

  _getPreviousRoadtrips() {
    const { date } = this.state;
    const { getRoadtrips, } = this.props;

    getRoadtrips(date)
  }

  _getNextRoadtrips() {
    const { date } = this.state;
    const { getRoadtrips } = this.props;
    getRoadtrips(date);
  }

  _renderRoadtripsContainer = ({ item, index }) => (
    <View style={[styles.roadtripPerDayContainer, { width }]}>
      <Roadtrip roadtrip={item} roadtripIndex={index} seeRoadtrip={this._seeRoadtrip} />
    </View>
  )

  _seeRoadtrip(roadtrip: object) {
    const { navigation } = this.props;
    navigation.navigate("SingleRoadtrip", { roadtrip });
  }


  render() {
    const { filterBtn, date } = this.state;
    const { navigation, roadtrips, isLoggedIn } = this.props;

    const gestureConfig = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    return (
      <GestureRecognizer config={gestureConfig} onSwipeLeft={this._getNextRoadtrips} onSwipeRight={this._getPreviousRoadtrips} style={styles.container}>
        <View>
          <View style={styles.header}>
            {
              isLoggedIn
                ?
                <TouchableOpacity style={styles.profileBtn} onPress={() => navigation.navigate('Profile')}>
                  <SvgUri width="40" height="40" source={require("../../../assets/icons/icon--noProfile.svg")} />
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.profileBtn} onPress={() => navigation.navigate('Login')}>
                  <SvgUri width="40" height="40" source={require("../../../assets/icons/icon--noProfile.svg")} />
                </TouchableOpacity>
            }

            <TouchableOpacity>
              <Text style={styles.filterBtn}>{filterBtn}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.date}>{date}</Text>
            {

              roadtrips.length > 0
                ?
                <View style={[styles.roadtripPerDayContainer, { width }]}>
                  <FlatList
                    data={roadtrips}
                    keyExtractor={item => item._id}
                    numColumns={2}
                    renderItem={({ item, index }) => <Roadtrip roadtrip={item} roadtripIndex={index} seeRoadtrip={this._seeRoadtrip} />}
                  />
                </View>
                :
                <View style={styles.noRoadtripsContainer}>
                  <Text style={styles.noRoadtrips}>No roadtrips are available for this date</Text>
                  <Text>😥</Text>
                </View>
            }
          </View>
          {
            isLoggedIn &&
            <View style={styles.addBtn}>
              <TouchableOpacity onPress={() => navigation.navigate('AddARoadtrip')}>
                <SvgUri width="50" height="50" source={require("../../../assets/icons/icon--addARoadtripBtn.svg")} />
              </TouchableOpacity>
            </View>
          }
        </View>
      </GestureRecognizer>
    );
  }
}

export default withNavigation(RListRoadtrips);