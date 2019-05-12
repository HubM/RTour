import * as React from "react";
import * as Expo from "expo";
import SvgUri from "react-native-svg-uri";
import { View, ScrollView, InteractionManager } from "react-native";
import { withNavigation } from 'react-navigation';
import { observer, inject } from "mobx-react";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from "./_style";

import { greenColor } from '../../helpers/styles/colors';
import RButton from "../../helpers/components/RButton";
import RInputText from "../../helpers/components/RInputText";
import MessageManager from "../../helpers/components/MessageManager";

const axios = require('react-native-axios');
const settings = require('../../../settings');

const initialState = {
  usernameOrEmail: "",
  password: "",
  notif: {}
}

interface RLoginState {
  usernameOrEmail: string,
  password: string,
  notif: {}
}
@inject(stores => ({
  setLoggedStatusToTrue: stores.rootStore.userStore.setLoggedStatusToTrue,
  setUser: stores.rootStore.userStore.setUser,
  setUserProfileInfos: stores.rootStore.userStore.setUserProfileInfos,
  checkUsernameOrEmail: stores.rootStore.userStore.checkUsernameOrEmail,
  setMessage: stores.rootStore.messageManagerStore.setMessage,
}))
@observer
class RLogin extends React.Component<any, RLoginState> {
  constructor(props: any) {
    super(props);
    this._checkAuth = this._checkAuth.bind(this);
    this.state = initialState
  }

  static navigationOptions = {
    header: null,
  };

  componentDidUpdate() {
    const { navigation } = this.props;
    if (navigation.getParam('resetState')) {
      InteractionManager.runAfterInteractions(() => {
        this.setState(initialState);
        navigation.setParams({ resetState: false });
      })
    }
  }

  async _registerNotifications(user: object) {
    const { status } = await Expo.Permissions.askAsync(Expo.Permissions.NOTIFICATIONS);

    if (status !== "granted") {
      alert('You must enable notifications in your application settings');
      return;
    }
    const token = await Expo.Notifications.getExpoPushTokenAsync();
    const url = `${settings.apiUrl}/registerPushs`;
    const { _id, username } = user;

    axios.post(url, {
      token,
      user: {
        id: _id,
        username
      }
    })
  }

  _checkAuth() {
    const { navigation, checkUsernameOrEmail, setMessage, clearMessageManager } = this.props;
    const { usernameOrEmail } = this.state;


    if (usernameOrEmail) {
      checkUsernameOrEmail(usernameOrEmail)
        .then((response: object) => {
          if (response.user) {
            navigation.navigate('ListRoadtrips');
            this._registerNotifications(response.user);
          } else {
            setMessage({
              status: "error",
              text: `${usernameOrEmail} is not registred in rtour 😔`
            })
          }
        })
    } else {
      setMessage({
        status: "info-negative",
        text: `You must give your identity 🕵🏻`
      })
    }
  }


  render() {
    const { navigation } = this.props;
    const { notif } = this.state;

    return (
      <View style={styles.container}>
        <MessageManager />
        <View style={styles.logo}>
          <SvgUri width="200" height="70" source={require("../../../assets/rtourLogoColored.svg")} />
        </View>
        <KeyboardAwareScrollView style={styles.content}>
          <View>
            <RInputText
              placeholder="Username or email"
              onChangeText={text => this.setState({ usernameOrEmail: text, notif: {} })}
              textColor={greenColor.light}
              crossMode="dark"
              textContentType="emailAddress"
              isSecureText={false}
            />
            {/* <RInputText
              placeholder="Password"
              onChangeText={password => this.setState({ password })}
              textColor={greenColor.light}
              crossMode="dark"
              textContentType="password"
              isSecureText={true}
            /> */}
            <RButton
              text="Let's go"
              color={greenColor.light}
              onPressEvent={this._checkAuth}
              type="main"
            />
            <View style={styles.multiplesSecondAction}>
              {/* <View style={{ marginRight: 5 }}>
                <RButton
                  text="Password forget ?"
                  color={greenColor.light}
                  onPressEvent={() => navigation.navigate('PasswordForget')}
                  type="second"
                />
              </View> */}
              <View style={{ marginLeft: 5 }}>
                <RButton
                  text="Register"
                  color={greenColor.light}
                  onPressEvent={() => navigation.navigate('Register')}
                  type="second"
                />
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    )
  }
}

export default withNavigation(RLogin);