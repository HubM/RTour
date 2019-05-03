import * as React from "react";
import * as Expo from "expo";
import SvgUri from "react-native-svg-uri";
import { View, ScrollView, InteractionManager } from "react-native";
import { withNavigation } from 'react-navigation';
import { observer, inject } from "mobx-react";

import styles from "./_style";

import { greenColor } from '../../helpers/styles/colors';
import RButton from "../../helpers/components/RButton";
import RInputText from "../../helpers/components/RInputText";
import { isEmptyObject } from "../../helpers"

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
  checkUsernameOrEmail: stores.rootStore.userStore.checkUsernameOrEmail
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
    const { navigation, checkUsernameOrEmail } = this.props;
    const { usernameOrEmail } = this.state;


    if (usernameOrEmail) {
      checkUsernameOrEmail(usernameOrEmail)
        .then((response: object) => {
          if (response.user) {
            navigation.navigate('ListRoadtrips');
            this._registerNotifications(response.user);
          } else {
            // const { type, message } = response;
            // this.setState({
            //   notif: {
            //     type,
            //     message
            //   }
            // })
          }
        })
    }
    // else {
    //   this.setState({
    //     notif: {
    //       type: "error",
    //       message: "Username or Email must be renseigned"
    //     }
    //   })
    // }
  }


  render() {
    const { navigation } = this.props;
    const { notif } = this.state;

    // let notifContainer = "";

    // if (!isEmptyObject(notif)) {
    //   notifContainer =
    //     <View style={{
    //       position: "absolute",
    //       top: 80,
    //       width: "80%",
    //       left: "10%",
    //       justifyContent: "center",
    //       zIndex: 1,
    //       flex: 1,
    //       alignItems: "center",
    //       backgroundColor: "#ff6b6b",
    //       paddingVertical: 10,
    //       borderRadius: 15
    //     }}>
    //       <Text style={{ color: "white" }}>
    //         {notif.message}
    //       </Text>
    //     </View>
    // }

    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <SvgUri width="200" height="70" source={require("../../../assets/rtourLogoColored.svg")} />
        </View>
        <ScrollView style={styles.content}>
          <RInputText
            placeholder="Username or email"
            onChangeText={text => this.setState({ usernameOrEmail: text, notif: {} })}
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