import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { withNavigation, NavigationActions, StackActions } from 'react-navigation';
import { toJS } from "mobx";
import { inject, observer } from 'mobx-react';
import SvgUri from 'react-native-svg-uri';

import style from "./_style";

import { seeRoadtripHelpers } from "../../helpers/";
import CrossExit from "../../helpers/components/CrossExit";
import Roadtrip from "../../helpers/components/Roadtrip";
import { yellowColor } from "../../helpers/styles/colors";


import ProfileInfo from "./_components/ProfileInfo";
import RButton from "../../helpers/components/RButton";


interface RProfileState {
  isEditable: boolean,
  ownProfile: boolean
}

@inject(stores => ({
  user: toJS(stores.rootStore.userStore.user),
  userProfile: toJS(stores.rootStore.userStore.userProfile),
  setUserProfileInfos: toJS(stores.rootStore.userStore.setUserProfileInfos),
  disconnectUser: toJS(stores.rootStore.userStore.disconnectUser),
  fetchUserProfileInfos: toJS(stores.rootStore.userStore.fetchUserProfileInfos),
  setSingleRoadtrip: stores.rootStore.singleRoadtripStore.setSingleRoadtrip
}))
@observer
class RProfile extends React.Component<RProfileState, any> {

  constructor(props: any) {
    super(props);
    this._seeRoadtrip = this._seeRoadtrip.bind(this);
    this.__disconnectUser = this.__disconnectUser.bind(this);

    this.state = {
      isEditable: false,
      ownProfile: false
    }
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const { navigation, user, fetchUserProfileInfos, setUserProfileInfos } = this.props;
    const userId = navigation.getParam("userId");
    if (userId === user._id) {
      const isOwnProfile = true;

      this.setState({
        ownProfile: isOwnProfile
      })
      setUserProfileInfos(user);
    } else {
      fetchUserProfileInfos(userId)
    }
  }

  _seeRoadtrip(roadtrip: object) {
    const { navigation, setSingleRoadtrip } = this.props;
    setSingleRoadtrip(roadtrip);
    navigation.navigate('SingleRoadtrip');
  }

  __disconnectUser() {
    const { navigation, disconnectUser } = this.props;
    disconnectUser();
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Login' })],
    });
    navigation.dispatch(resetAction);
  }

  render() {
    const { ownProfile } = this.state;
    const { user, roadtrips } = this.props.userProfile;
    const { firstname, lastname, age, email, username, city, profilePic, music } = user;


    let roadtripsSection;

    if (roadtrips && roadtrips.length > 0) {
      roadtripsSection =
        <View style={{ marginBottom: 20, marginTop: 30 }}>
          <Text style={style.title}>Roadtrips 📍</Text>
          <FlatList
            data={roadtrips}
            keyExtractor={r => r._id}
            renderItem={({ item, index }) => <Roadtrip roadtrip={item} roadtripIndex={index} seeRoadtrip={this._seeRoadtrip} layoutStyle="row" />}
          />
        </View>
    }


    return (
      <ScrollView style={style.container}>
        <View style={style.header}>
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
          {roadtripsSection}
        </View>
        {
          ownProfile
          &&
          <RButton
            text="Disconnect"
            color={yellowColor.light}
            onPressEvent={this.__disconnectUser}
            type="main"
          />
        }
      </ScrollView >
    );
  }
}

export default withNavigation(RProfile);