import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";


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

    const { startCity, endCity, duration, hour, owner } = roadtrip;

    return <View style={styles.container}>
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
      </View>;
  }
}