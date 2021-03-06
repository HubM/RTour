import { createStackNavigator, createAppContainer } from "react-navigation";

import RWelcome from "../components/templates/R-Welcome";
import RRegister from "../components/templates/R-Register";
import RLogin from "../components/templates/R-Login";
import RProfile from "../components/templates/R-Profile";
import RListRoadtrips from "../components/templates/R-ListRoadtrips";
import RSingleRoadtrip from "../components/templates/R-SingleRoadtrip";
import RAddARoadtip from "../components/templates/R-AddARoadtrip";
import RManageRider from "../components/templates/R-ManageRider";
import RChooseCity from '../components/templates/R-ChooseCity';

const RootNavigator = createStackNavigator(
  {
    Welcome: RWelcome,
    Register: RRegister,
    Login: RLogin,
    Profile: RProfile,
    ListRoadtrips: RListRoadtrips,
    SingleRoadtrip: RSingleRoadtrip,
    AddARoadtrip: RAddARoadtip,
    ManageRider: RManageRider,
    ChooseCity: RChooseCity
  },
  {
    initialRouteName: "Welcome"
  }
);

export default createAppContainer(RootNavigator);
