import * as React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import SvgUri from "react-native-svg-uri";

import Roadtrip from "./_components/Roadtrip";

import { ComponentNavigationProps } from "../../helpers";
import styles from "./_style/R-ListRoadtrips--styles";
import fakeRoadtrips from "./_data/fakeRoadtrips";


export default class RListRoadtrips extends React.PureComponent<ComponentNavigationProps> {
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
            renderItem={({ item, index }) => <Roadtrip roadtrip={item} roadtripIndex={index} />}
          />
        </View>
        <View style={styles.addBtn}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('AddARoadtrip')}>
            <SvgUri width="50" height="50" source={require("../../../assets/icons/icon--addARoadtripBtn.svg")} />
          </TouchableOpacity>
        </View>
      </View>;
  }
}