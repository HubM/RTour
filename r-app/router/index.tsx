import * as React from "react";

import { createStackNavigator, createAppContainer, StackNavigator } from "react-navigation";
import { inject, observer } from "mobx-react"

import RWelcome from "../components/templates/R-Welcome";
import RListRoadtrips from "../components/templates/R-ListRoadtrips";
import RSingleRoadtrip from "../components/templates/R-SingleRoadtrip";
import RAddARoadtip from "../components/templates/R-AddARoadtrip";


// const RouteConfigs = 

// const RootNavigator = StackNavigator(RouteConfigs);

const RootNavigator = createStackNavigator(
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


@inject('rootNavigation')
@observer
class AppContainer extends React.Component<any> {
  render() {
    const { rootNavigation } = this.props;
    console.log(rootNavigation);
    return <RootNavigator />;
  }
}

export default AppContainer;



// export default createAppContainer(AppNavigator);
