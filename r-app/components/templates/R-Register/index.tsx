import * as React from "react";
import SvgUri from "react-native-svg-uri";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { withNavigation } from 'react-navigation';

import styles from "./_style";

import RButton from "../../helpers/components/RButton";
import RInputText from "../../helpers/components/RInputText";
import { grayColor, placeholderColor } from '../../helpers/styles/colors';

import { inject, observer } from 'mobx-react';
import RInputNumber from '../../helpers/components/RInputNumber';
import MessageManager from '../../helpers/components/MessageManager';

interface RLoginState {
  firstname: string,
  lastname: string,
  age: string,
  city: string,
  username: string
}

@inject(stores => ({
  setMessage: stores.rootStore.messageManagerStore.setMessage,
  clearMessageManager: stores.rootStore.messageManagerStore.clearMessageManager,
  createUser: stores.rootStore.userStore.createUser,
}))
@observer
class RRegister extends React.Component<any, RLoginState> {
  constructor(props: any) {
    super(props);
    this._verifyAge = this._verifyAge.bind(this);
    this._verifyUsername = this._verifyUsername.bind(this);
    this._checkRegister = this._checkRegister.bind(this);
    this._getBackCityData = this._getBackCityData.bind(this);
    this._goToCityView = this._goToCityView.bind(this);

    this.state = {
      firstname: "",
      lastname: "",
      age: "",
      city: "",
      username: ""
    }
  }

  static navigationOptions = {
    header: null
  };

  _checkRegister() {
    const { firstname, lastname, age, username, city } = this.state;
    const { createUser, setMessage, navigation } = this.props;
  
    if (firstname && lastname && age && username && city) {
      createUser(this.state);
      setMessage({
        status: "info-positive",
        text: `Welcome to Rtour ${username} 🤘`
      })
      navigation.navigate('Login')
    }
  }

  _verifyAge(age: string) {
    const { setMessage, clearMessageManager } = this.props;
    if (Number(age) < 18) {
      setMessage({
        status: "error",
        text: "Only adults can join us 😔"
      })
    } else {
      this.setState({
        age
      }, () => {
        clearMessageManager();
      })
    }
  }

  _verifyUsername(username: string) {
    const { setMessage, clearMessageManager } = this.props;

    if(username.length <= 3) {
      setMessage({
        status: "error",
        text: "Username must have 4 or more letters 😺"
      })
    } else {
      this.setState({
        username
      }, () => {
        clearMessageManager();
      })
    }
  }

  _getBackCityData(cityObject: { city: string, type: string }) {
    const { city, type } = cityObject;

    if (type === "endCity") {
      this.setState({
        city: city.details.name
      })
    }
  }


  _goToCityView(params: {placeholder: string, type: string, value: string}) {
    const { navigation } = this.props;
    const { placeholder, type, value } = params;

    navigation.navigate('ChooseCity', { 
      placeholder,
      type,
      goBackCityData: this._getBackCityData,
      value
     })
  }




  render() {
    const { navigation } = this.props;
    const { city } = this.state;
    return (
      <ScrollView style={styles.container}>
        <MessageManager />
        <View style={styles.logo}>
          <SvgUri width="200" height="70" source={require("../../../assets/rtourLogoWhite.svg")} />
        </View>
        <View style={styles.content}>
          <RInputText
            placeholder="*Firstname"
            onChangeText={firstname => this.setState({ firstname })}
            textColor={grayColor.light}
            crossMode="light"
            textContentType="none"
            isSecureText={false}
          />
          <RInputText
            placeholder="*Lastname"
            onChangeText={lastname => this.setState({ lastname })}
            textColor={grayColor.light}
            crossMode="light"
            textContentType="none"
            isSecureText={false}
          />
          <RInputNumber
            placeholder="*Age..."
            complementarySingleStateValue={"yo"}
            complementaryMultipleStateValue={"yo"}
            textColor={grayColor.light}
            onChangeNumber={this._verifyAge}
          />
          <RInputText
            placeholder="*Username"
            onChangeText={username => this._verifyUsername(username)}
            textColor={grayColor.light}
            crossMode="light"
            textContentType="username"
            isSecureText={false}
          />
          <View>
            <TouchableOpacity onPress={
                () => {
                  const params = {
                    placeholder: "*City...",
                    type: "endCity",
                    value: city,
                  }
                  this._goToCityView(params)
                }
              } style={[styles.inputContainer, city ?  { borderBottomColor: "transparent" }: { borderBottomColor: placeholderColor } ]}>
                  {
                    city 
                    ?
                      <Text style={[ styles.cityButton, { color: grayColor.light}]}>{city}</Text>
                    :
                      <Text style={[styles.cityButton, { color: placeholderColor}]}>*City...</Text>
                  }
              </TouchableOpacity>
          </View>  
  
          <RButton
            text="Start"
            color={grayColor.light}
            onPressEvent={this._checkRegister}
            type="main"
          />
          <RButton
            text="login"
            color={grayColor.light}
            onPressEvent={() => navigation.navigate('Login')}
            type="second"
          />
        </View>
      </ScrollView>
    )
  }
}

export default withNavigation(RRegister);