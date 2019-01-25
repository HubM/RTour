import * as React from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

import BackArrow from "../../helpers/components/BackArrow";
import RInputText from "../../helpers/components/RInputText";

import { grayColor, yellowColor } from "../../helpers/styles/_colors";

import styles from "./_style";

export default class RAddARoadtrip extends React.PureComponent<any> {
  state = {
    emptyInputText: true
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <BackArrow color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Your roadtrip</Text>
          <View>
            <RInputText 
              placeholder="Starting City"
              placeholderColor={grayColor.light}
              mainColor={yellowColor.light}
            />
          </View>
        </View>
      </View>
    );
  }
}