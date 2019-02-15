import * as React from "react";
import { View, ScrollView, Text } from "react-native";
import { withNavigation } from 'react-navigation';
import SvgUri from "react-native-svg-uri";

import RInputText from "../../helpers/components/RInputText";
import RMainButton from "../../helpers/components/RMainButton";
import RSecondButton from "../../helpers/components/RSecondButton";

import styleRLogin from "./_style";
import { greenColor } from '../../helpers/styles/_colors';

class RLogin extends React.PureComponent<any> {

  static navigationOptions = {
    header: null,
  };

  state = {
    usernameOrEmail: "",
    password: ""
  }

  render() {
    return (
      <View style={styleRLogin.container}>
        <View style={styleRLogin.logo}>
          <SvgUri width="200" height="70" source={require("../../../assets/rtourLogoColored.svg")} />
        </View>
        <ScrollView style={styleRLogin.content}>
          <RInputText
            placeholder="Username or email"
            onChangeText={text => this.setState({ usernameOrEmail: text })}
            textColor={greenColor.light}
            crossMode="dark"
            textContentType="emailAddress"
            isSecureText={false}
          />
          <RInputText
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            textColor={greenColor.light}
            crossMode="dark"
            textContentType="password"
            isSecureText={true}
          />
        </ScrollView>
      </View>
    )
  }
}

export default withNavigation(RLogin);