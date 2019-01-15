import * as React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import SvgUri from "react-native-svg-uri";

import Roadtrip from "./_components/Roadtrip";

import styles from "../../includes/styles/components/RListRoadtrips--styles";
import fakeRoadtrips from "./_data/fakeRoadtrips";




export default class RListRoadtrips extends React.PureComponent<{}> {
  static navigationOptions = {
    header: null,
  };

  state = {
    filterBtn: "Filter".toUpperCase(),
    roadtrips: fakeRoadtrips
  }
  
  render() {
    const { filterBtn, roadtrips } = this.state;
    return <View style={styles.container}>
        <View style={styles.header}>
          <SvgUri width="40" height="40" source={require("../../../assets/icons/icon--noProfile.svg")} />
          <TouchableOpacity>
            <Text style={styles.filterBtn}>{filterBtn}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.date}>03 December</Text>
        <View style={styles.roadtripsContainer}>
          <FlatList
            data={roadtrips}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Roadtrip roadtrip={item} />}
          />
        </View>
      </View>;
  }
}