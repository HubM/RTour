import * as React from "react";
import { Text, View } from "react-native";

import styles from '../includes/styles/components/RWelcome-styles';

export default class RWelcome extends React.PureComponent<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.ts to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
