import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../../templates/R-ListRoadtrips/_style";
import { isIndexEven } from "../index";

interface RoadtripProps {
  roadtrip: {
    _id: string,
    address: string,
    calendar: {
      startingDate: string,
      duration: number
    },
    hour: string,
    owner: {
      name: string
    },
    roadtripType: string,
    seats: number,
    startCity: string,
    endCity: string,
  },
  roadtripIndex: number,
  seeRoadtrip(roadtrip: object): void,
  layoutStyle: string
};

export default class Roadtrip extends React.Component<RoadtripProps> {
  constructor(props: RoadtripProps) {
    super(props);
    this.seeRoadtrip = this.seeRoadtrip.bind(this);
  }

  seeRoadtrip() {
    return this.props.seeRoadtrip(this.props.roadtrip);
  }

  render() {
    const { roadtripIndex, roadtrip, layoutStyle } = this.props;

    const { startCity, endCity, hour, calendar } = roadtrip;

    let durationExist;

    if (calendar) {
      const { duration } = calendar;
      durationExist = duration;
    }

    let roadtripLayoutStyle;

    if (layoutStyle === "columns") {
      roadtripLayoutStyle = [styles.roadtripSingle, isIndexEven(roadtripIndex) ? { marginRight: "2%" } : { marginLeft: "2%" }]
    } else if ((layoutStyle === "row")) {
      roadtripLayoutStyle = [styles.roadtripSingle, { width: "100%" }]
    }

    return (
      <TouchableOpacity
        style={roadtripLayoutStyle}
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