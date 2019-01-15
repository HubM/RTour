import { createStackNavigator, createAppContainer } from "react-navigation";

import RWelcome from "../components/templates/R-Welcome";
import RListRoadtrips from "../components/templates/R-ListRoadtrips";
import RAddARoadtip from "../components/templates/R-AddARoadtrip";

const AppNavigator = createStackNavigator(
  {
    Welcome: RWelcome,
    ListRoadtrips: RListRoadtrips,
    AddARoadtrip: RAddARoadtip
  },
  {
    initialRouteName: "Welcome"
  }
);

export default createAppContainer(AppNavigator);
