import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { toJS } from "mobx";
import { inject, observer } from 'mobx-react';

import style from "./_style";

import CrossExit from "../../helpers/components/CrossExit";
import ProfileInfo from "./_components/ProfileInfo";
import SvgUri from 'react-native-svg-uri';

interface RProfileState {
  isEditable: boolean
}

@inject(stores => ({
  user: toJS(stores.rootStore.userStore.user)
}))
@observer
class RProfile extends React.Component<RProfileState, any> {
  static navigationOptions = {
    header: null,
  };

  state = {
    isEditable: false
  }

  render() {
    const { firstname, lastname, age, email, username, city, profilePic, music } = this.props.user;
    return (
      <ScrollView style={style.container}>
        <View style={style.header}>
          <TouchableOpacity>
            <SvgUri width="20" height="20" source={require("../../../assets/icons/icon--whitePen.svg")} />
          </TouchableOpacity>
          <CrossExit color="white" route="ListRoadtrips" />
        </View>
        <View style={style.titleContainer}>
          {
            profilePic
              ?
              <Image source={require('./tmpProfile.png')} style={style.profilePicture} />
              :
              <Image source={require('../../../assets/img/defaultProfile.jpg')} style={style.profilePicture} />
          }
          {
            username
              ?
              <Text style={style.title}>{username}</Text>
              :
              <Text style={style.title}>Profile</Text>
          }
        </View>
        <View style={style.content}>
          <ProfileInfo type="firstname" value={firstname} />
          <ProfileInfo type="lastname" value={lastname} />
          <ProfileInfo type="age" value={age} />
          <ProfileInfo type="email" value={email} />
          <ProfileInfo type="username" value={username} />
          <ProfileInfo type="city" value={city} />
          <ProfileInfo type="music" value={music} />
        </View>
      </ScrollView>
    );
  }
}

export default withNavigation(RProfile);