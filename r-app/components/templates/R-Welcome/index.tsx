import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SvgUri from "react-native-svg-uri";

import RMainButton from "../../helpers/components/RMainButton";
import RSecondButton from "../../helpers/components/RSecondButton";

import styles from "./_style";

export default class RWelcome extends React.PureComponent<any> {
  
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <SvgUri width="200" height="90" source={require("../../../assets/rtour-logo.svg")} />
        </View>
        <View style={styles.content}>
          <View style={styles.introContainer}>
            <Text style={styles.introContent}>
              This webapp is made for all riders which like to share their
              passion and travel the world.
            </Text>
            <Text style={styles.introContent}>
              If you feel concerned by this application, or if you are simply
              curious, you are welcome 🤘
            </Text>
          </View>
        </View>       
        <RMainButton 
          text="Connect"
          route="ListRoadtrips"
          color="white"
        />
        <RSecondButton
          text="skip"
          route="ListRoadtrips"
          color="white"
        />
      </View>
    );
  }
}
