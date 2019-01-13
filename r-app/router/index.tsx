import { createStackNavigator, createAppContainer } from "react-navigation";

import RWelcome from "../components/templates/RWelcome";
import RListRoadtrips from "../components/templates/RListRoadtrips";

const AppNavigator = createStackNavigator(
  {
    Welcome: RWelcome,
    ListRoadtrips: RListRoadtrips
  },
  {
    initialRouteName: "Welcome"
  }
);

export default createAppContainer(AppNavigator);
