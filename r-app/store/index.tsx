import UserStore from "./user.store";
import RoadtripsStore from "./roadtrips.store";
import SingleRoadtripStore from "./single-roadtrip.store";
import MessageManagerStore from "./message-manager.store";

export default class RootStore {
  public userStore: UserStore
  public roadtripsStore: RoadtripsStore
  public singleRoadtripStore: SingleRoadtripStore
  public messageManagerStore: MessageManagerStore

  constructor() {
    this.userStore = new UserStore();
    this.roadtripsStore = new RoadtripsStore();
    this.singleRoadtripStore = new SingleRoadtripStore();
    this.messageManagerStore = new MessageManagerStore();
  }
}