import * as React from "react";
import { View, Text } from "react-native";

import style from "../_style";

interface ProfileInfosState {
  valueType: string
}

interface ProfileInfoProps {
  type: string,
  value: any
};


export default class ProfileInfo extends React.Component<ProfileInfoProps, ProfileInfosState> {
  state = {
    valueType: ""
  }

  componentDidMount() {
    switch (typeof this.props.value) {
      case "string":
        this.setState({
          valueType: "string"
        })
        break;
      case "number":
        this.setState({
          valueType: "string"
        })
        break;
      case "object":
        this.setState({
          valueType: "object"
        })
        break;
      default:
        this.setState({
          valueType: "string"
        })
        break;
    }

  }

  render() {
    const { valueType } = this.state;
    const { type, value } = this.props;

    let displayedValue;

    if (valueType === "object") {
      displayedValue =
        <View style={{
          flex: 1,
          flexDirection: "row"
        }}>
          {
            value.map((val: string, index: number) =>
              <Text key={index} style={style.profileInfoValue}>
                {val} {value.length !== index + 1 && "-"}
              </Text>
            )
          }
        </View>
    } else {
      displayedValue = <Text style={style.profileInfoValue}>{value}</Text>
    }

    return (
      <View style={style.profileInfoContainer}>
        <Text style={style.profileInfoType}>{type}</Text>
        {displayedValue}
      </View>
    );
  }
}