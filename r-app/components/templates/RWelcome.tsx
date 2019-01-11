import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SvgUri from "react-native-svg-uri";

import styles from "../includes/styles/components/RWelcome-styles";

export default class RWelcome extends React.PureComponent<{}> {
  state = {
    buttonLabel: 'Connect'.toUpperCase()
  }

  _connexionRedirection() {
    console.log('connexion button')
  }

  _skipConnexion() {
    console.log('skip connexion button')
  }

  render() {
    const { buttonLabel } = this.state;

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
        <TouchableOpacity onPress={this._connexionRedirection}>
          <Text style={styles.mainButton}>{buttonLabel}</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.secondButton}>skip</Text>
        </TouchableOpacity>
      </View>;
  }
}
