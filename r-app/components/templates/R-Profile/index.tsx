import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import { toJS } from "mobx";
import { inject, observer } from 'mobx-react';
import SvgUri from 'react-native-svg-uri';

import style from "./_style";

import CrossExit from "../../helpers/components/CrossExit";
import ProfileInfo from "./_components/ProfileInfo";

interface RProfileState {
  isEditable: boolean,
  ownProfile: boolean
}

@inject(stores => ({
  user: toJS(stores.rootStore.userStore.user),
  userProfile: toJS(stores.rootStore.userProfileStore.userProfile),
  setLoggedUserInfos: toJS(stores.rootStore.userProfileStore.setLoggedUserInfos),
  setUserProfileInfos: toJS(stores.rootStore.userProfileStore.setUserProfileInfos),
  fetchUserProfileInfos: toJS(stores.rootStore.userProfileStore.fetchUserProfileInfos)
}))
@observer
class RProfile extends React.Component<RProfileState, any> {

  constructor(props: any) {
    super(props);
    this._seeRoadtrip = this._seeRoadtrip.bind(this);
    this.state = {
      isEditable: false,
      ownProfile: false
    }
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const { navigation, user, setLoggedUserInfos, fetchUserProfileInfos } = this.props;
    const profileUser = navigation.getParam("profileUser");

    if (profileUser === user.username) {
      const isOwnProfile = true;
      this.setState({
        ownProfile: isOwnProfile
      })
      setLoggedUserInfos(user);
    } else {
      fetchUserProfileInfos(profileUser)
    }
  }

  _seeRoadtrip() {

  }

  render() {
    const { ownProfile } = this.state;
    const { firstname, lastname, age, email, username, city, profilePic, music, trips } = this.props.userProfile;



    console.log(trips);
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
            trips.length > 0
            &&
            <View style={{ marginBottom: 100, marginTop: 50 }}>
              <Text style={{ color: "#FFF784", fontSize: 20, lineHeight: 33 }}>Roadtrips</Text>
              <FlatList
                data={trips}
                keyExtractor={i => i._id}
                renderItem={({ item }) => (
                  <View key={item._id}>
                    <Text>{item.startCity}</Text>
                  </View>
                )}
              />
            </View>
          }
        </View>
      </ScrollView>
    );
  }
}

export default withNavigation(RProfile);