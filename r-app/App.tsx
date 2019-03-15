import * as React from "react";
import * as Expo from "expo";

import { Provider } from "mobx-react";

import AppContainer from "./router";
import RootStore from "./store";

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

interface State {
  isReady: Boolean;
}

export default class App extends React.Component<{}, State> {
  public state: State = { isReady: false };

  componentDidMount() {
    this._loadFonts();
    // this._registerNotifications();
    // Expo.Notifications.addListener(this._listenNotifications);
  }

  // componentWillUnmount() {
  //   Expo.Notifications.removeListener(this._listenNotifications);
  // }

  // _listenNotifications({ origin, data }) {
  //   console.log("cool data", origin, data);
  // }


  // async _registerNotifications() {
  //   const { status } = await Expo.Permissions.askAsync(Expo.Permissions.NOTIFICATIONS);

  //   if (status !== "granted") {
  //     alert('You must enable notifications in your application settings');
  //     return;
  //   }
  //   const token = await Expo.Notifications.getExpoPushTokenAsync();
  //   console.log(status, token);
  // }


  async _loadFonts() {
    await Expo.Font.loadAsync({
      merriwl: require("./assets/fonts/merriweather-l.ttf"),
      merriwr: require("./assets/fonts/merriweather-r.ttf"),
      merriwb: require("./assets/fonts/merriweather-b.ttf"),
      robotol: require("./assets/fonts/roboto-l.ttf"),
      robotor: require("./assets/fonts/roboto-r.ttf"),
      robotom: require("./assets/fonts/roboto-m.ttf"),
      robotob: require("./assets/fonts/roboto-b.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <Provider rootStore={new RootStore()}>
        <AppContainer />
      </Provider>
    );
  }

}