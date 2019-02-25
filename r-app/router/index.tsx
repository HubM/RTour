import { createStackNavigator, createAppContainer } from "react-navigation";

import RWelcome from "../components/templates/R-Welcome";
import RRegister from "../components/templates/R-Register";
import RLogin from "../components/templates/R-Login";
import RListRoadtrips from "../components/templates/R-ListRoadtrips";
import RSingleRoadtrip from "../components/templates/R-SingleRoadtrip";
import RAddARoadtip from "../components/templates/R-AddARoadtrip";

const RootNavigator = createStackNavigator(
  {
    Welcome: RWelcome,
    Register: RRegister,
    Login: RLogin,
    ListRoadtrips: RListRoadtrips,
    SingleRoadtrip: RSingleRoadtrip,
    AddARoadtrip: RAddARoadtip
  },
  {
    initialRouteName: "Register"
  }
);

export default createAppContainer(RootNavigator);
