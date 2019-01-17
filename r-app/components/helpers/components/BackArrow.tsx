import * as React from "react";

import SvgUri from "react-native-svg-uri";

import { NavigationScreenProp } from "react-navigation";

interface RoadtripProps {
  color: string
};


export default class BackArrow extends React.PureComponent<RoadtripProps> {
  render() {
    const { color } = this.props;
    return (
      color === "white" 
      ? <SvgUri width="20" height="20" source={require("../../../assets/icons/icon--goToBackWhite.svg")} />
      : <SvgUri width="20" height="20" source={require("../../../assets/icons/icon--goToBackBlack.svg")} />
    );
    
  }
}