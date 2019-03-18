import { action } from 'mobx';
import { addRoadtripAPI } from "../../components/templates/R-AddARoadtrip/_api";

export default class newRoadtripStore {
  @action
  addRoadtrip(roadtrip: object) {
    addRoadtripAPI(roadtrip)
      .then(message => {
        console.log(message);
      })
      .catch(error => {
        console.log(error);
      })
  }
}
