import * as React from "react";
import { View, Text } from "react-native";
import SvgUri from "react-native-svg-uri";
import { withNavigation } from "react-navigation";

import RButton from "../../helpers/components/RButton";
import styles from "./_style";
import { grayColor } from '../../helpers/styles/colors';

class RWelcome extends React.PureComponent<any> {

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <SvgUri width="200" height="90" source={require("../../../assets/rtourLogoWhite.svg")} />
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
        <RButton
          text="Connect"
          color={grayColor.light}
          onPressEvent={() => navigation.navigate('Login')}
          type="main"
        />
        <RButton
          text="skip"
          color={grayColor.light}
          onPressEvent={() => navigation.navigate('ListRoadtrips')}
          type="second"
        />
      </View>
    );
  }
}


export default withNavigation(RWelcome);