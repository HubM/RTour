import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { withNavigation, NavigationActions, StackActions } from 'react-navigation';
import { toJS } from "mobx";
import { inject, observer } from 'mobx-react';

import style from "./_style";

import { seeRoadtripHelpers } from "../../helpers/";
import CrossExit from "../../helpers/components/CrossExit";
import Roadtrip from "../../helpers/components/Roadtrip";


// import ProfileInfo from "./_components/ProfileInfo";
import RButton from "../../helpers/components/RButton";
import ProfileInfo from '../R-Profile/_components/ProfileInfo';


interface RProfileState {
  isEditable: boolean,
  ownProfile: boolean
}


@inject(stores => ({
  riderProfile: toJS(stores.rootStore.userStore.riderProfile),
  fetchRiderProfileInfos: stores.rootStore.userStore.fetchRiderProfileInfos
}))
@observer
class RManageRider extends React.Component<RProfileState, any> {

  constructor(props: any) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };


  componentDidMount() {

    const { fetchRiderProfileInfos, navigation } = this.props;
    const userId = navigation.getParam("userId");

    fetchRiderProfileInfos(userId)
  }


  render() {
    const { username, firstname, lastname, city } = this.props.riderProfile;

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
        <View style={style.riderContainer}>
          <Image source={require('../../../assets/img/defaultProfile.jpg')} style={style.profilePicture} />
          <Text style={style.title}>{name}</Text>
          <Text style={style.city}>{city}</Text>
        </View>
        <View style={style.actionsButtonContainer}>

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