import * as React from "react";
import SvgUri from "react-native-svg-uri";
import { View, ScrollView, Text } from "react-native";
import { withNavigation } from 'react-navigation';

import { toJS } from "mobx";
import { observer, inject } from "mobx-react";

import styles from "./_style";
import { greenColor } from '../../helpers/styles/colors';

import RButton from "../../helpers/components/RButton";
import RInputText from "../../helpers/components/RInputText";

interface RLoginState {
  usernameOrEmail: string,
  password: string
}


@inject(stores => ({
  setLoggedStatusToTrue: stores.rootStore.userStore.setLoggedStatusToTrue,
  setUser: stores.rootStore.userStore.setUser,
  setUserProfileInfos: stores.rootStore.userProfileStore.setUserProfileInfos,
  checkUsernameOrEmail: stores.rootStore.userStore.checkUsernameOrEmail,
  userLoginMessageContainer: toJS(stores.rootStore.userStore.userLoginMessageContainer)
}))
@observer
class RLogin extends React.Component<any, RLoginState> {
  constructor(props: any) {
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
    const { navigation, setLoggedStatusToTrue, setUser, setUserProfileInfos, checkUsernameOrEmail, userLoginMessageContainer } = this.props;
    const { usernameOrEmail } = this.state;

    if (usernameOrEmail) {
      checkUsernameOrEmail(usernameOrEmail);
      navigation.navigate('ListRoadtrips');
      if (userLoginMessageContainer.status === "success") {
      } else {
        this.setState({
          usernameOrEmail: ""
        })
      }
    } else {
      console.log("username must be renseigned")
    }
  }


  render() {
    const { navigation, userLoginMessageContainer } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <SvgUri width="200" height="70" source={require("../../../assets/rtourLogoColored.svg")} />
        </View>
        {
          userLoginMessageContainer.length > 0
          &&
          <View>
            <Text>{userLoginMessageContainer.message}</Text>
          </View>
        }
        <ScrollView style={styles.content}>
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
          <View style={styles.multiplesSecondAction}>
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