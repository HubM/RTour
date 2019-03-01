import * as React from "react";
import { View, Text, Image } from 'react-native';
import { withNavigation } from 'react-navigation';

import style from "./_style";

import CrossExit from "../../helpers/components/CrossExit";
import RInputText from '../../helpers/components/RInputText';

interface RProfileState {
  isEditable: boolean
}

class RProfile extends React.Component<RProfileState, any> {
  static navigationOptions = {
    header: null,
  };

  state = {
    isEditable: false
  }

  render() {
    const { isEditable } = this.state;
    return (
      <View style={style.container}>
        <View style={style.header}>
          <CrossExit color="white" route="ListRoadtrips" />
        </View>
        <Text style={style.title}>Profile</Text>
        {
          isEditable
            ?

            :
              // <Image source={require()} />

        }
      </View>
    );
  }
}

export default withNavigation(RProfile);