import * as React from "react";
import SvgUri from "react-native-svg-uri";
import moment from "moment";
import { inject, observer } from 'mobx-react';
import { withNavigation } from "react-navigation";
import { View, Text, TouchableOpacity, FlatList, Dimensions } from "react-native";
import GestureRecognizer from 'react-native-swipe-gestures';

import Swipeout from 'react-native-swipeout';

import rootStore from '../../../store';
import styles from "./_style";

import { getRoadtripsByDate } from "./_api";

import Roadtrip from "./_components/Roadtrip";

const width = Dimensions.get('window').width;

interface RListRoadtripsState {
  filterBtn: string,
  roadtrips: object,
  date: string
}

interface RListRoadtripsProps {
  isLoggedIn?: rootStore,
  appState: object
}

@inject(stores => ({
  isLoggedIn: stores.rootStore.userStore.isLoggedIn as rootStore
}))
@observer
class RListRoadtrips extends React.Component<RListRoadtripsProps, RListRoadtripsState> {
  constructor(props: RListRoadtripsProps) {
    super(props);
    this._seeRoadtrip = this._seeRoadtrip.bind(this);
    this._swipeToLeftEvent = this._swipeToLeftEvent.bind(this);

    this.state = {
      filterBtn: "Filter".toUpperCase(),
      roadtrips: [],
      date: moment().format('DD/MM/YYYY')
    }
  }

  componentDidMount() {
    const { date } = this.state; 

    getRoadtripsByDate(date).then(roadtrips => {
      this.setState({
        roadtrips
      })
    });
  }

  static navigationOptions = {
    header: null,
  };


  _renderRoadtripsContainer = ({ item, index }) => (
    <View style={[styles.roadtripPerDayContainer, { width }]}>
      <Roadtrip roadtrip={item} roadtripIndex={index} seeRoadtrip={this._seeRoadtrip} />
    </View>
  )

  _seeRoadtrip(roadtrip: object) {
    const { navigation } = this.props;
    navigation.navigate("SingleRoadtrip", { roadtrip });
  }

  _swipeToLeftEvent() {
    const { date } = this.state; 


    console.log("old date", date)
    const newDate = moment(date, "MM/DD/YYYY").add(1, 'day');
    newDate.add(1, 'day');
    // getRoadtripsByDate
    console.log(newDate)
  }

  render() {
    const { filterBtn, roadtrips } = this.state;
    const { navigation, isLoggedIn } = this.props;

    const today = moment().format('DD/MM/YYYY');

    const gestureConfig = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    
    return (
      <GestureRecognizer config={gestureConfig} onSwipeLeft={this._swipeToLeftEvent} style={styles.container}>
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
            <Text style={styles.date}>{today}</Text>
              <View style={[styles.roadtripPerDayContainer, { width }]}>
                <Swipeout>
                  <FlatList
                    data={roadtrips}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    renderItem={({ item, index }) => <Roadtrip roadtrip={item} roadtripIndex={index} seeRoadtrip={this._seeRoadtrip} />}
                    onScrollEndDrag={this._swipeToLeftEvent}
                  />
                </Swipeout>
              </View>
            {/* <FlatList
              data={roadtrips}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={true}
              keyExtractor={item => item._id}
              horizontal={false}
              renderItem={this._renderRoadtripsContainer}
              onScrollEndDrag={this._swipeToLeftEvent}
            /> */}
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