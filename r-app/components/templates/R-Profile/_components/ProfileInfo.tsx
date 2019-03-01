import * as React from "react";
import { View, Text } from "react-native";

import style from "../_style";

interface ProfileInfoProps {
  type: string,
  value: string
};

export default class ProfileInfo extends React.Component<any, ProfileInfoProps> {
  render() {
    const { type, value } = this.props;

    return (
      <View style={style.profileInfoContainer}>
        <Text style={style.profileInfoType}>{type}</Text>
        <Text style={style.profileInfoValue}>{value}</Text>
      </View>
    );
  }
}