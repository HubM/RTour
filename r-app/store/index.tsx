import UserStore from "../components/templates/R-Login/_store";
import UserProfileStore from "../components/templates/R-Profile/_store";
import RoadtripsStore from "../components/templates/R-ListRoadtrips/_store";
import newRoadtripStore from "../components/templates/R-AddARoadtrip/_store";

export default class RootStore {
  public userStore: UserStore
  public userProfileStore: UserProfileStore
  public roadtripsStore: RoadtripsStore
  public newRoadtripStore: newRoadtripStore

  constructor() {
    this.userStore = new UserStore();
    this.userProfileStore = new UserProfileStore();
    this.roadtripsStore = new RoadtripsStore();
    this.newRoadtripStore = new newRoadtripStore();
  }
}