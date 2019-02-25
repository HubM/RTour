import * as React from "react";
import SvgUri from "react-native-svg-uri";
import { View, ScrollView } from "react-native";
import { withNavigation } from 'react-navigation';

import styleRRegister from "./_style";

import RButton from "../../helpers/components/RButton";
import RInputText from "../../helpers/components/RInputText";
import { grayColor } from '../../helpers/styles/_colors';

interface RLoginState {
  email: string,
  username: string,
  password: string,
  passwordCheck: string
}

class RLogin extends React.PureComponent<any, RLoginState> {
  constructor(props: any) {
    super(props);
    this._checkRegister = this._checkRegister.bind(this);
    this.state = {
      email: "",
      username: "",
      password: "",
      passwordCheck: ""
    }
  }

  static navigationOptions = {
    header: null
  };

  _checkRegister() {
    console.log("New user !")
    // const { email, password } = this.state;
    // const { navigation, userStore } = this.props;

    // if (usernameOrEmail === "H" && password === "u") {
    //   userStore.setLoggedStatusToTrue();
    //   navigation.navigate('ListRoadtrips');
    // }
  }


  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={styleRRegister.container}>
        <View style={styleRRegister.logo}>
          <SvgUri width="200" height="70" source={require("../../../assets/rtourLogoWhite.svg")} />
        </View>
        <View style={styleRRegister.content}>
          <RInputText
            placeholder="Email"
            onChangeText={text => this.setState({ email: text })}
            textColor={grayColor.light}
            crossMode="dark"
            textContentType="emailAddress"
            isSecureText={false}
          />
          <RInputText
            placeholder="Email"
            onChangeText={username => this.setState({ username })}
            textColor={grayColor.light}
            crossMode="dark"
            textContentType="emailAddress"
            isSecureText={false}
          />
          <RInputText
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            textColor={grayColor.light}
            crossMode="dark"
            textContentType="password"
            isSecureText={true}
          />
          <RInputText
            placeholder="Password"
            onChangeText={passwordCheck => this.setState({ passwordCheck })}
            textColor={grayColor.light}
            crossMode="dark"
            textContentType="password"
            isSecureText={true}
          />
          <RButton
            text="Start"
            color={grayColor.light}
            onPressEvent={this._checkRegister}
            type="main"
          />
          <RButton
            text="login"
            color={grayColor.light}
            onPressEvent={() => navigation.navigate('Login')}
            type="second"
          />
        </View>
      </ScrollView>
    )
  }
}

export default withNavigation(RLogin);