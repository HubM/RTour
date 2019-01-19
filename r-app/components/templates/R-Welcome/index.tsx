import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SvgUri from "react-native-svg-uri";

import { ComponentNavigationProps } from "../../helpers";
import styles from "./_style";

export default class RWelcome extends React.PureComponent<ComponentNavigationProps, object> {
  
  static navigationOptions = {
    header: null,
  };

  state = {
    buttonLabel: 'Connect'.toUpperCase()
  }

  render() {
    const { buttonLabel } = this.state;
    const { navigate } = this.props.navigation;
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
        <TouchableOpacity onPress={() => navigate("ListRoadtrips")}>
          <Text style={styles.mainButton}>{buttonLabel}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("ListRoadtrips")}>
          <Text style={styles.secondButton}>skip</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
