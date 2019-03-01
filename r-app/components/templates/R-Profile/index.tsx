import * as React from "react";
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

import BackArrow from "../../helpers/components/BackArrow";

class RProfile extends React.Component<any, any> {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <View>
          <BackArrow color="white" />
        </View>
        <Text>HELLO</Text>
      </View>
    );
  }
}

export default withNavigation(RProfile);