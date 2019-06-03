import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { withNavigation, NavigationActions, StackActions } from 'react-navigation';
import { toJS } from "mobx";
import { inject, observer } from 'mobx-react';

import style from "./_style";

import CrossExit from "../../helpers/components/CrossExit";


import RButton from "../../helpers/components/RButton";
import { yellowColor, uiErrorColor, greenColor } from '../../helpers/styles/colors';


interface RProfileState {
  isEditable: boolean,
  ownProfile: boolean
}


@inject((stores: any)  => ({
  riderProfile: toJS(stores.rootStore.userStore.riderProfile),
  fetchRiderProfileInfos: stores.rootStore.userStore.fetchRiderProfileInfos,
  refuseRiderToRoadtrip: stores.rootStore.singleRoadtripStore.refuseRiderToRoadtrip,
  acceptRiderToRoadtrip: stores.rootStore.singleRoadtripStore.acceptRiderToRoadtrip
}))
@observer
class RManageRider extends React.Component<RProfileState, any> {

  constructor(props: any) {
    super(props);
    this._refuseRiderToRoadtrip = this._refuseRiderToRoadtrip.bind(this);
    this._acceptRiderToRoadtrip = this._acceptRiderToRoadtrip.bind(this);
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const { fetchRiderProfileInfos, navigation } = this.props;
    const userId = navigation.getParam("userId");

    fetchRiderProfileInfos(userId)
  }

  _refuseRiderToRoadtrip() {
    const { refuseRiderToRoadtrip, navigation, riderProfile } = this.props;
    const roadtripId = navigation.getParam("roadtripId");

    refuseRiderToRoadtrip(riderProfile._id, roadtripId, "refused");
    navigation.navigate('ListRoadtrips');
  }

  _acceptRiderToRoadtrip() {
    const { acceptRiderToRoadtrip, navigation, riderProfile } = this.props;
    const roadtripId = navigation.getParam("roadtripId");

    acceptRiderToRoadtrip(riderProfile._id, roadtripId);
    navigation.navigate('ListRoadtrips');
  }

  render() {

    const { navigation, riderProfile } = this.props;
    const { firstname, lastname, city } = riderProfile;

    let name = "";

    if (firstname) {
      name += firstname;
    }

    if (lastname) {
      name += ` ${lastname}`
    }

    return (
      <View style={style.container}>
        <View style={style.header}>
          <CrossExit color="black" />
        </View>
        <View style={style.content}>
          <TouchableOpacity style={style.riderContainer} onPress={() => navigation.navigate('Profile', { userId: riderProfile._id })}>
            <Image source={require('../../../assets/img/defaultProfile.jpg')} style={style.profilePicture} />
            <Text style={style.title}>{name}</Text>
            <Text style={style.city}>{city}</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", justifyContent: "center", marginHorizontal: 30 }}>
            <View style={{ marginRight: 5 }}>
              <RButton
                text="Refuse"
                color={uiErrorColor.light}
                onPressEvent={this._refuseRiderToRoadtrip}
                type="main"
              />
            </View>
            <View style={{ marginLeft: 5 }}>
              <RButton
                text="Accept"
                color={greenColor.light}
                onPressEvent={this._acceptRiderToRoadtrip}
                type="main"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(RManageRider);