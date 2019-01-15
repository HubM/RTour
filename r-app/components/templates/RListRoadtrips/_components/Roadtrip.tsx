import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../../../includes/styles/components/RListRoadtrips--styles";

interface RoadtripProps {
  roadtrip: {
    startCity: string,
    endCity: string,
    hour: string,
    duration: number  
  }
};

export default class Roadtrip extends React.PureComponent<RoadtripProps> {
  render() {
    const { startCity, endCity, hour, duration } = this.props.roadtrip;
    return (
      <TouchableOpacity style={styles.roadtripSingle}>
        <Text style={styles.roadtripSingle__startingCity}>{startCity}</Text>
        <Text style={styles.roadtripSingle__endingCity}>{endCity}</Text>
        <Text style={styles.roadtripSingle__hour}>{hour}</Text>
        <Text style={styles.roadtripSingle__duration}>{duration} { duration > 1 ?
          'days' : 'day' }</Text>
      </TouchableOpacity>
    );
  }
}