import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";


import { ComponentNavigationProps } from "../../helpers";

export default class RSingleRoadtrip extends React.PureComponent<ComponentNavigationProps> {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation } = this.props;
    const roadtrip = navigation.getParam("roadtrip");

    const { startCity, endCity, duration, hour} = roadtrip;

    console.log(roadtrip)
    return (
      <View>
        <Text>{startCity}</Text>
      </View>
    );
  }
}