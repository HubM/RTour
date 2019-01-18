import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import { ComponentNavigationProps } from "../../helpers";

import BackArrow from "../../helpers/components/BackArrow";
import styles from "./_style";
import SvgUri from 'react-native-svg-uri';


export default class RSingleRoadtrip extends React.PureComponent<ComponentNavigationProps> {
  static navigationOptions = {
    header: null,
  };


  render() {
    const { navigation } = this.props;
    const roadtrip = navigation.getParam("roadtrip");

    const { startCity, endCity, hour, owner, spec } = roadtrip;
    const { seats, calendar, address, roadtripType } = spec;
    
    // let roadtripTypeIcon;

    // if (roadtripType) {
    //   roadtripType === "roundTrip"
    //     ? roadtripTypeIcon = {
    //       icon: "icon--roundTripWhite.svg",
    //       name: "Round Trip"
    //     }
    //     : roadtripTypeIcon = {
    //       icon: "icon--singleTripWhite.svg",
    //       name: "Single Trip"
    //     }
    // }

    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow color="white" />
          </TouchableOpacity>
        </View>
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
                  {seats} { seats > 1 ? "seats available" : "seat available"}
                </Text>
              </View>
          }
          {
            (calendar && calendar.startingDate ||
             calendar && calendar.duration) &&
            <View style={styles.roadtripSubInfos__single}>
              <SvgUri width="20" height="20" source={require("../../../assets/icons/icon--calendar.svg")} />
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
          {/* {
            (roadtripType) &&
            <View style={styles.roadtripSubInfos__single}>
              <SvgUri width="20" height="20" source={require(`../../../assets/icons/${roadtripType.icon}`)} />
              <Text style={styles.roadtripSubInfos__single__text}>{}</Text>
            </View>
          } */}
        </View>
      </ScrollView>
    );
  }
}