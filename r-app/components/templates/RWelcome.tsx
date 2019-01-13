import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationScreenProp } from 'react-navigation';
import SvgUri from "react-native-svg-uri";

import styles from "../includes/styles/components/RWelcome-styles";


export interface RWelcomeProps {
  navigation: NavigationScreenProp<any, any>
};

export default class RWelcome extends React.PureComponent<RWelcomeProps, object> {
  
  static navigationOptions = {
    header: null,
  };

  state = {
    buttonLabel: 'Connect'.toUpperCase()
  }

  _connexionRedirection() {
    this.props.navigation.navigate("ListRoadtrips");
  }

  _skipConnexion() {
    this.props.navigation.navigate("ListRoadtrips");
  }

  render() {
    const { buttonLabel } = this.state;
    const { navigate } = this.props.navigation;

    return <View style={styles.container}>
        <View style={styles.logo}>
          <SvgUri width="200" height="90" source={require("../../assets/rtour-logo.svg")} />
        </View>
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
      <TouchableOpacity onPress={() => navigate('ListRoadtrips')}>
          <Text style={styles.mainButton}>{buttonLabel}</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.secondButton}>skip</Text>
        </TouchableOpacity>
      </View>;
  }
}
