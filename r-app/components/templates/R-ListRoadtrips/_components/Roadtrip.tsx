import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../_style";
import { isIndexEven } from "../../../helpers";


interface RoadtripProps {
  roadtrip: {
    id: string,
    startCity: string,
    endCity: string,
    hour: string,
    owner: {
      name: string
    },
    spec: {
      seats: number,
      calendar: {
        startingDate: string,
        duration: number
      },
      address: string,
      roadtripType: string
    }
  },
  roadtripIndex: number,
  seeRoadtrip(roadtrip: object): void,
};

export default class Roadtrip extends React.PureComponent<RoadtripProps> {
  constructor(props: RoadtripProps) {
    super(props);
    this.seeRoadtrip = this.seeRoadtrip.bind(this);
  }
  
  seeRoadtrip() {
    return this.props.seeRoadtrip(this.props.roadtrip);
  }

  render() {
    const { roadtripIndex, roadtrip } = this.props;

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
            { marginRight: !isIndexEven(roadtripIndex) ? 0 : 10 }
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