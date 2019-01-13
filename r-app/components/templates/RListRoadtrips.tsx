import * as React from "react";
import { View, Text } from "react-native";

import styles from "../includes/styles/components/RListRoadtrips--styles";

export default class RListRoadtrips extends React.PureComponent<{}> {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>RListRoadtrips view</Text>
        </View>
      </View>
    );
  }
}