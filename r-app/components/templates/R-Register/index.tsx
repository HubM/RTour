import * as React from "react";
import SvgUri from "react-native-svg-uri";
import { View, ScrollView, Picker } from "react-native";
import { withNavigation } from 'react-navigation';
import SelectMultiple from 'react-native-select-multiple'

import styles from "./_style";

import RButton from "../../helpers/components/RButton";
import RInputText from "../../helpers/components/RInputText";
import { grayColor } from '../../helpers/styles/colors';

import { validateEmail } from "../../helpers/";

interface RLoginState {
  firstname: string,
  lastname: string,
  age: string,
  city: string,
  email: string,
  username: string,
  music: Array<string>,
  selectedMusic: Array<string>
}

const renderLabel = (label, style) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image style={{width: 42, height: 42}} source={{uri: 'https://dummyimage.com/100x100/52c25a/fff&text=S'}} />
      <View style={{marginLeft: 10}}>
        <Text style={style}>{label}</Text>
      </View>
    </View>
  )
}

class RLogin extends React.PureComponent<any, RLoginState> {
  constructor(props: any) {
    super(props);
    this._onMusicSelectionChange = this._onMusicSelectionChange.bind(this);
    this._checkUserEmail = this._checkUserEmail.bind(this);
    this._checkRegister = this._checkRegister.bind(this);
    this.state = {
      firstname: "",
      lastname: "",
      age: "",
      city: "",
      email: "",
      username: "",
      music: ["All"],
      selectedMusic: []
    }
  }

  static navigationOptions = {
    header: null
  };

  _checkUserEmail(email: string) {
    if (validateEmail(email)) {
      this.setState({
        email
      })
    } else {
      console.log("NOPE")
    }
  }

  _checkRegister() {
    console.log("New user !", this.state)
    const { navigation } = this.props;

    // navigation.navigate('RListRoadtrips')
  }

  _onMusicSelectionChange(selectedMusic: any) {
    console.log("SELECTED MUSICS TYPE", selectedMusic);
  }


  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.logo}>
          <SvgUri width="200" height="70" source={require("../../../assets/rtourLogoWhite.svg")} />
        </View>
        <View style={styles.content}>
          <RInputText
            placeholder="Firstname"
            onChangeText={firstname => this.setState({ firstname })}
            textColor={grayColor.light}
            crossMode="light"
            textContentType="none"
            isSecureText={false}
          />
          <RInputText
            placeholder="Lastname"
            onChangeText={lastname => this.setState({ lastname })}
            textColor={grayColor.light}
            crossMode="light"
            textContentType="none"
            isSecureText={false}
          />
          <RInputText
            placeholder="Age"
            onChangeText={age => this.setState({ age })}
            textColor={grayColor.light}
            crossMode="light"
            textContentType="none"
            isSecureText={false}
          />
          <RInputText
            placeholder="Email"
            onChangeText={this._checkUserEmail}
            textColor={grayColor.light}
            crossMode="light"
            textContentType="none"
            isSecureText={false}
          />
          <RInputText
            placeholder="Username"
            onChangeText={username => this.setState({ username })}
            textColor={grayColor.light}
            crossMode="light"
            textContentType="username"
            isSecureText={false}
          />
          <View>
            <SelectMultiple
                items={["1","2","3"]}
                renderLabel={renderLabel}
                selectedItems={this.state.selectedMusic}
                onSelectionsChange={this._onMusicSelectionChange} 
              />
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

export default withNavigation(RLogin);