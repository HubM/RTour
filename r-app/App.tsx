import * as React from "react";
import * as Expo from "expo";

import { Provider } from "mobx-react";
import NavigationStore from 'react-navigation-mobx-helpers';
import { createStackNavigator, createAppContainer } from "react-navigation";

import RWelcome from "./components/templates/R-Welcome";
import RListRoadtrips from "./components/templates/R-ListRoadtrips";
import RSingleRoadtrip from "./components/templates/R-SingleRoadtrip";
import RAddARoadtip from "./components/templates/R-AddARoadtrip";


import RootStore from "./store";

// Disable warnings
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

// import AppContainer from "./router";

const rootNavigation = new NavigationStore();

interface State {
  isReady: Boolean;
}

const AppNavigator = createStackNavigator(
  {
    Welcome: RWelcome,
    ListRoadtrips: RListRoadtrips,
    SingleRoadtrip: RSingleRoadtrip,
    AddARoadtrip: RAddARoadtip
  },
  {
    initialRouteName: "ListRoadtrips"
  }
);

const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component<{}, State> {

  public state: State = { isReady: false };

  componentWillMount() {
    this._loadFonts();
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
      <Provider rootNavigation={rootNavigation} rootStore={new RootStore()}>
        <AppContainer ref={rootNavigation.createRef} />
      </Provider>
    );
  }

}