import * as React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import SvgUri from "react-native-svg-uri";


import styles from "../includes/styles/components/RListRoadtrips--styles";
import fakeRoadtrips from "../../data/fakeRoadtrips";


export default class RListRoadtrips extends React.PureComponent<{}> {
  static navigationOptions = {
    header: null,
  };

  state = {
    filterBtn: "Filter".toUpperCase(),
    roadtrips: []
  }
  
  componentDidMount() {
    this.setState({
      roadtrips: fakeRoadtrips
    })
  }

  render() {
    const { filterBtn, roadtrips } = this.state;
    console.log(roadtrips);
    return <View style={styles.container}>
        <View style={styles.header}>
          <SvgUri width="40" height="40" source={require("../../assets/icons/icon--noProfile.svg")} />
          <TouchableOpacity>
            <Text style={styles.filterBtn}>{filterBtn}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.date}>03 December</Text>
        <View style={styles.roadtripsContainer}>
          {/* <FlatList data={roadtrips} renderItem={({ roadtrip }) => (
            <TouchableOpacity style={styles.roadtripSingle}>
                <Text style={styles.roadtripSingle__startingCity}>
                  {roadtrip.startCity}
                </Text>
                <Text style={styles.roadtripSingle__endingCity}>
                  {roadtrip.endCity}
                </Text>
                <Text style={styles.roadtripSingle__hour}>
                  {roadtrip.hour}
                </Text>
                <Text style={styles.roadtripSingle__duration}>
                  {roadtrip.startCity}
                </Text>
          </TouchableOpacity>)
          } /> */}
          <TouchableOpacity style={styles.roadtripSingle}>
            <Text style={styles.roadtripSingle__startingCity}>New York</Text>
            <Text style={styles.roadtripSingle__endingCity}>San Francisco</Text>
            <Text style={styles.roadtripSingle__hour}>8h</Text>
            <Text style={styles.roadtripSingle__duration}>2 days</Text>
          </TouchableOpacity>         
          <TouchableOpacity style={styles.roadtripSingle}>
            <Text style={styles.roadtripSingle__startingCity}>New York</Text>
            <Text style={styles.roadtripSingle__endingCity}>San Francisco</Text>
            <Text style={styles.roadtripSingle__hour}>8h</Text>
            <Text style={styles.roadtripSingle__duration}>2 days</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roadtripSingle}>
            <Text style={styles.roadtripSingle__startingCity}>New York</Text>
            <Text style={styles.roadtripSingle__endingCity}>San Francisco</Text>
            <Text style={styles.roadtripSingle__hour}>8h</Text>
            <Text style={styles.roadtripSingle__duration}>2 days</Text>
          </TouchableOpacity>          
        </View>
      </View>;
  }
}