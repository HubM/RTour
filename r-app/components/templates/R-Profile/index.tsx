import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import { toJS } from "mobx";
import { inject, observer } from 'mobx-react';
import SvgUri from 'react-native-svg-uri';

import style from "./_style";

import CrossExit from "../../helpers/components/CrossExit";
import Roadtrip from "../../helpers/components/Roadtrip";
import RButton from "../../helpers/components/RButton";

import { seeRoadtripHelpers } from "../../helpers/";
import ProfileInfo from "./_components/ProfileInfo";

interface RProfileState {
  isEditable: boolean,
  ownProfile: boolean
}

@inject(stores => ({
  user: toJS(stores.rootStore.userStore.user),
  userProfile: toJS(stores.rootStore.userStore.userProfile),
  setUserProfileInfos: toJS(stores.rootStore.userStore.setUserProfileInfos),
  // disconnectUser: stores.rooStore.userStore.disconnectUser,
  fetchUserProfileInfos: toJS(stores.rootStore.userStore.fetchUserProfileInfos)
}))
@observer
class RProfile extends React.Component<RProfileState, any> {

  constructor(props: any) {
    super(props);
    this._seeRoadtrip = this._seeRoadtrip.bind(this);
    this.__deconnectUser = this.__deconnectUser.bind(this);

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

    if (userId === user.id) {
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
    const { navigation } = this.props;
    seeRoadtripHelpers({ roadtrip }, navigation);
  }

  __deconnectUser() {
    const { navigation } = this.props;

  }

  render() {
    const { ownProfile } = this.state;
    const { user, roadtrips } = this.props.userProfile;
    const { firstname, lastname, age, email, username, city, profilePic, music } = user;
    return (
      <ScrollView style={style.container}>
        <View style={style.header}>
          {
            ownProfile &&
            <TouchableOpacity>
              <SvgUri width="20" height="20" source={require("../../../assets/icons/icon--whitePen.svg")} />
            </TouchableOpacity>
          }
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
          {
            (roadtrips && roadtrips.length > 0)
            &&
            <View style={{ marginBottom: 100, marginTop: 30 }}>
              <Text style={style.title}>Roadtrips</Text>
              <FlatList
                data={roadtrips}
                keyExtractor={r => r._id}
                renderItem={({ item, index }) => <Roadtrip roadtrip={item} roadtripIndex={index} seeRoadtrip={this._seeRoadtrip} layoutStyle="row" />}
              />
            </View>
          }
        </View>
        {/* {
          ownProfile
          &&
          // <RButton
          //   text="Let's go"
          //   color={greenColor.light}
          //   onPressEvent={this._deconnectUser}
          //   type="main"
          // />
        } */}
      </ScrollView >
    );
  }
}

export default withNavigation(RProfile);