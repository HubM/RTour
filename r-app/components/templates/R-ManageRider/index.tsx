import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { withNavigation, NavigationActions, StackActions } from 'react-navigation';
import { toJS } from "mobx";
import { inject, observer } from 'mobx-react';

import style from "./_style";

import CrossExit from "../../helpers/components/CrossExit";


import RButton from "../../helpers/components/RButton";
import { yellowColor, uiErrorColor } from '../../helpers/styles/colors';


interface RProfileState {
  isEditable: boolean,
  ownProfile: boolean
}


@inject(stores => ({
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
    const { _id, firstname, lastname, city } = riderProfile;

    let name = "";

    if (firstname) {
      name += firstname;
    }

    if (lastname) {
      name += ` ${lastname}`
    }

    return (
      <ScrollView style={style.container}>
        <View style={style.header}>
          <CrossExit color="white" />
        </View>
        <TouchableOpacity style={style.riderContainer} onPress={() => navigation.navigate('Profile', { userId: _id })}>
          <Image source={require('../../../assets/img/defaultProfile.jpg')} style={style.profilePicture} />
          <Text style={style.title}>{name}</Text>
          <Text style={style.city}>{city}</Text>
        </TouchableOpacity>
        <View style={style.actionsButtonContainer}>
          <RButton
            text="Refuse"
            color={uiErrorColor.light}
            onPressEvent={this._refuseRiderToRoadtrip}
            type="main"
          />
          <RButton
            text="Accept"
            color={yellowColor.light}
            onPressEvent={this._acceptRiderToRoadtrip}
            type="main"
          />
        </View>
      </ScrollView>
      // <ScrollView style={style.container}>

      //   <View style={style.titleContainer}>
      //     {
      //       profilePic
      //         ?
      //         <Image source={require('./tmpProfile.png')} style={style.profilePicture} />
      //         :
      //         <Image source={require('../../../assets/img/defaultProfile.jpg')} style={style.profilePicture} />
      //     }
      //     {
      //       username
      //         ?
      //         <Text style={style.title}>{username}</Text>
      //         :
      //         <Text style={style.title}>Profile</Text>
      //     }
      //   </View>
      //   <View style={style.content}>
      //     <ProfileInfo type="firstname" value={firstname} />
      //     <ProfileInfo type="lastname" value={lastname} />
      //     <ProfileInfo type="age" value={age} />
      //     <ProfileInfo type="email" value={email} />
      //     <ProfileInfo type="username" value={username} />
      //     <ProfileInfo type="city" value={city} />
      //     <ProfileInfo type="music" value={music} />
      //     {roadtripsSection}
      //   </View>
      //   {
      //     ownProfile
      //     &&
      // <RButton
      //   text="Disconnect"
      //   color={yellowColor.light}
      //   onPressEvent={this.__disconnectUser}
      //   type="main"
      // />
      //   }
      // </ScrollView >
    );
  }
}

export default withNavigation(RManageRider);