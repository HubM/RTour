import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";


import { ComponentNavigationProps } from "../../helpers";
import BackArrow from "../../helpers/components/BackArrow";
import styles from "./_style";


export default class RSingleRoadtrip extends React.PureComponent<ComponentNavigationProps> {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation } = this.props;
    const roadtrip = navigation.getParam("roadtrip");

    const { startCity, endCity, duration, hour} = roadtrip;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.roadtripTitle}>
          <Text style={styles.roadtripTitleStartCity}>{startCity}</Text> 
          <Text style={styles.roadtripTitleEndCity}>{endCity}</Text> 
        </View>
      </View>
    );
  }
}