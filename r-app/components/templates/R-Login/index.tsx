import * as React from "react";
import SvgUri from "react-native-svg-uri";
import { View, ScrollView, Text } from "react-native";
import { withNavigation } from 'react-navigation';
import { observer, inject } from "mobx-react";

import rootStore from "../../../store";
import styleRLogin from "./_style";
import { greenColor } from '../../helpers/styles/_colors';

import RButton from "../../helpers/components/RButton";
import RInputText from "../../helpers/components/RInputText";

interface RLoginState {
  usernameOrEmail: string,
  password: string
}

interface RLoginProps {
  userStore?: rootStore
}

@inject(stores => ({
  userStore: stores.rootStore.userStore as rootStore
}))
@observer
class RLogin extends React.Component<RLoginProps, RLoginState> {
  constructor(props: RLoginProps) {
    super(props);
    this._checkAuth = this._checkAuth.bind(this);
    this.state = {
      usernameOrEmail: "",
      password: ""
    }
  }

  static navigationOptions = {
    header: null,
  };

  _checkAuth() {
    const { usernameOrEmail, password } = this.state;
    const { navigation, userStore } = this.props;

    if (usernameOrEmail === "H" && password === "u") {
      userStore.setLoggedStatusToTrue();
      navigation.navigate('ListRoadtrips');
    }
  }


  render() {
    const { navigation } = this.props;

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
          <RButton
            text="Let's go"
            color={greenColor.light}
            onPressEvent={this._checkAuth}
            type="main"
          />
          <View style={styleRLogin.multiplesSecondAction}>
            <View style={{ marginRight: 5 }}>
              <RButton
                text="Password forget ?"
                color={greenColor.light}
                onPressEvent={() => navigation.navigate('PasswordForget')}
                type="second"
              />
            </View>
            <View style={{ marginLeft: 5 }}>
              <RButton
                text="Register"
                color={greenColor.light}
                onPressEvent={() => navigation.navigate('Register')}
                type="second"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default withNavigation(RLogin);