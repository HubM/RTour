import * as React from "react";
import * as Expo from "expo";

import { Notifications } from "expo";

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
    Notifications.addListener(this._handleNotifications)
  }




  _handleNotifications = (notification) => {
    console.log(notification)
  }


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