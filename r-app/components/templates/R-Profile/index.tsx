import * as React from "react";
import { View, Text, Image, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { inject, observer } from 'mobx-react';

import style from "./_style";

import CrossExit from "../../helpers/components/CrossExit";
import ProfileInfo from "./_components/ProfileInfo";

interface RProfileState {
  isEditable: boolean
}

@inject(stores => ({
  user: stores.rootStore.userStore.user
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
    const { firstname, lastname, age, email, username, city, profilePic } = this.props.user;
    return (
      <ScrollView style={style.container}>
        <View style={style.header}>
          <CrossExit color="white" route="ListRoadtrips" />
        </View>
        <Text style={style.title}>Profile</Text>
        <View style={style.content}>
          <Image source={require(profilePic)} />
          <ProfileInfo type="firstname" value={firstname} />
          <ProfileInfo type="lastname" value={lastname} />
          <ProfileInfo type="age" value={age} />
          <ProfileInfo type="email" value={email} />
          <ProfileInfo type="username" value={username} />
          <ProfileInfo type="city" value={city} />
        </View>
      </ScrollView>
    );
  }
}

export default withNavigation(RProfile);