import * as React from "react";
import SvgUri from "react-native-svg-uri";
import moment from "moment";
import { inject, observer } from 'mobx-react';
import { withNavigation } from "react-navigation";
import { View, Text, TouchableOpacity, FlatList, Dimensions } from "react-native";

import rootStore from '../../../store';
import styles from "./_style";
import fakeRoadtrips from "./_data";

import Roadtrip from "./_components/Roadtrip";

const width = Dimensions.get('window').width;

interface RListRoadtripsState {
  filterBtn: string,
  roadtrips: object,
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
    this.state = {
      filterBtn: "Filter".toUpperCase(),
      roadtrips: fakeRoadtrips,
    }
  }

  static navigationOptions = {
    header: null,
  };

  _renderRoadtripsContainer = ({ item }) => {
    const listRoadtripsDate = moment(item.date, "DD/MM/YYYY").format('ddd D MMM');

    return (
      <View style={[styles.roadtripPerDayContainer, { width: width }]}>
        <Text style={styles.date}>{listRoadtripsDate}</Text>
        <FlatList
          data={item.roadtrips}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({ item, index }) => <Roadtrip roadtrip={item} roadtripIndex={index} seeRoadtrip={this._seeRoadtrip} />}
        />
      </View>
    )
  }

  _seeRoadtrip(roadtrip: object) {
    const { navigation } = this.props;
    navigation.navigate("SingleRoadtrip", { roadtrip });
  }

  render() {
    const { filterBtn, roadtrips } = this.state;
    const { navigation, isLoggedIn } = this.props;

    return (
      <View style={styles.container}>
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
          <FlatList
            data={roadtrips}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={true}
            keyExtractor={item => item.date}
            horizontal={true}
            renderItem={this._renderRoadtripsContainer}
          />
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
    );
  }
}

export default withNavigation(RListRoadtrips);