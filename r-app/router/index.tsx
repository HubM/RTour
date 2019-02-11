import { createStackNavigator, createAppContainer } from "react-navigation";

import RWelcome from "../components/templates/R-Welcome";
import RListRoadtrips from "../components/templates/R-ListRoadtrips";
import RSingleRoadtrip from "../components/templates/R-SingleRoadtrip";
import RAddARoadtip from "../components/templates/R-AddARoadtrip";
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

export default createAppContainer(AppNavigator);
