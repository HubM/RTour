import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../_style";
import { isIndexEven } from "../../../helpers";


interface RoadtripProps {
  roadtrip: {
    startCity: string,
    endCity: string,
    hour: string,
    spec: {
      calendar: {
        duration: number
      }
    }
  },
  roadtripIndex: number,
  seeRoadtrip(roadtrip: object): void,
};

export default class Roadtrip extends React.PureComponent<RoadtripProps> {
  constructor(props: any) {
    super(props);
    this.seeRoadtrip = this.seeRoadtrip.bind(this);
  }
  
  seeRoadtrip() {
    return this.props.seeRoadtrip(this.props.roadtrip);
  }

  render() {
    const { roadtripIndex, roadtrip, seeRoadtrip } = this.props;
    const { startCity, endCity, hour, spec } = roadtrip;

    let durationExist;

    if (spec.calendar) {
      const { duration } = spec.calendar;
      durationExist = duration;
    }

    return (
      <TouchableOpacity 
        style={[
            styles.roadtripSingle, 
            { marginRight: isIndexEven(roadtripIndex) ? 10 : 0 }
        ]}
        onPress={this.seeRoadtrip}
      >
        <Text style={styles.roadtripSingle__startingCity}>{startCity}</Text>
        <Text style={styles.roadtripSingle__endingCity}>{endCity}</Text>
        <Text style={styles.roadtripSingle__hour}>{hour}</Text>
        {
          durationExist && 
          <Text style={styles.roadtripSingle__duration}>
            {durationExist} {durationExist > 1 ? "days" : "day"}
          </Text>
        }
       
     </TouchableOpacity>
    );
  }
}