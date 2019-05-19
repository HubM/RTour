import * as React from "react";
import SvgUri from "react-native-svg-uri";
import moment from "moment";
import { inject, observer } from 'mobx-react';
import { withNavigationFocus } from "react-navigation";
import { View, Text, TouchableOpacity, FlatList, Dimensions } from "react-native";
import DateTimePicker from 'react-native-modal-datetime-picker';

import styles from "./_style";

import Roadtrip from "../../helpers/components/Roadtrip";
import MessageManager from "../../helpers/components/MessageManager";


const width = Dimensions.get('window').width;

interface RListRoadtripsState {
  filterBtn: string,
  date: string,
  isDateTimePickerVisible: boolean
  roadtrips: Array<Object>
}

interface RListRoadtripsProps {
  isLoggedIn: boolean,
  appState: object,
  getRoadtrips(date: string): void,
  isFetchingRoadtrips: boolean
}

@inject((stores: any)  => ({
  isLoggedIn: stores.rootStore.userStore.isLoggedIn,
  userId: stores.rootStore.userStore.user._id,
  getRoadtrips: stores.rootStore.roadtripsStore.getRoadtrips,
  isFetchingRoadtrips: stores.rootStore.roadtripsStore.isFetchingRoadtrips,
  setSingleRoadtrip: stores.rootStore.singleRoadtripStore.setSingleRoadtrip
}))
@observer
class RListRoadtrips extends React.Component<RListRoadtripsProps, RListRoadtripsState> {
  constructor(props: RListRoadtripsProps) {
    super(props);
    this._seeRoadtrip = this._seeRoadtrip.bind(this);
    this._fetchRoadtrips = this._fetchRoadtrips.bind(this);
    this._getPrevRoadtrips = this._getPrevRoadtrips.bind(this);
    this._getNextRoadtrips = this._getNextRoadtrips.bind(this);
    this._showDateTimePicker = this._showDateTimePicker.bind(this);
    this._hideDateTimePicker = this._hideDateTimePicker.bind(this);
    this._handleDatePicked = this._handleDatePicked.bind(this);

    this.state = {
      filterBtn: "Filter".toUpperCase(),
      date: moment().format('DD/MM/YYYY'),
      isDateTimePickerVisible: false,
      roadtrips: []
    }

    this._fetchRoadtrips(this.state.date);
  }

  static navigationOptions = {
    header: null,
  };

  _fetchRoadtrips(date: string) {
    this.props.getRoadtrips(date).then(roadtrips => {
      this.setState({
        date,
        roadtrips
      })
    })
  }

  

  _getPrevRoadtrips() {
    const { date } = this.state;
    const newDate = moment(date, "DD/MM/YYYY").subtract(1, 'day').format("DD/MM/YYYY");

    this._fetchRoadtrips(newDate);
  }

  _getNextRoadtrips() {
    const { date } = this.state;
    const newDate = moment(date, "DD/MM/YYYY").add(1, 'day').format("DD/MM/YYYY");

    this._fetchRoadtrips(newDate);
  }

  _renderRoadtripsContainer = ({ item, index }) => (
    <View style={[styles.roadtripPerDayContainer, { width }]}>
      <Roadtrip roadtrip={item} roadtripIndex={index} seeRoadtrip={this._seeRoadtrip} />
    </View>
  )

  _seeRoadtrip(roadtrip: object) {
    const { navigation, setSingleRoadtrip } = this.props;

    setSingleRoadtrip(roadtrip);
    navigation.navigate('SingleRoadtrip');
  }

  _showDateTimePicker() {
    this.setState({ isDateTimePickerVisible: true });
  }

  _handleDatePicked(date: object) {
    const dateStringified = moment(date).format('DD/MM/YYYY');

    this._fetchRoadtrips(dateStringified);
    this._hideDateTimePicker();
  }

  _hideDateTimePicker() {
    this.setState({ isDateTimePickerVisible: false });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isFocused !== this.props.isFocused) {
      this._fetchRoadtrips(this.state.date);
    }
  }

  render() {
    const { filterBtn, date, isDateTimePickerVisible, roadtrips } = this.state;
    const { navigation, isLoggedIn, isFetchingRoadtrips, userId } = this.props;

    return (
      <View style={styles.container}>
        <MessageManager />
        <View style={styles.header}>
          {
            isLoggedIn
              ?
              <TouchableOpacity style={styles.profileBtn} onPress={() => navigation.navigate('Profile', { userId })}>
                <SvgUri width="40" height="40" source={require("../../../assets/icons/icon--noProfile.svg")} />
              </TouchableOpacity>
              :
              <TouchableOpacity style={styles.profileBtn} onPress={() => navigation.navigate('Login')}>
                <SvgUri width="40" height="40" source={require("../../../assets/icons/icon--noProfile.svg")} />
              </TouchableOpacity>
          }

          <TouchableOpacity>
            <Text style={styles.filterBtn}>{filterBtn}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={this._showDateTimePicker}>
            <View style={styles.buttonDateContainer}>
              <Text style={styles.date}>{date}</Text>
              <SvgUri width="25" height="25" source={require("../../../assets/icons/icon--calendarYellow.svg")} />
            </View>
            <DateTimePicker
              isVisible={isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
              date={moment(date, 'DD/MM/YYYY').toDate()}
            />
          </TouchableOpacity>
          {
            roadtrips && roadtrips.length > 0
              ?
              <View style={[styles.roadtripPerDayContainer, { width: "100%" }]}>
                <FlatList
                  data={roadtrips}
                  keyExtractor={item => item._id}
                  numColumns={2}
                  renderItem={({ item, index }) => (
                    <Roadtrip roadtrip={item} roadtripIndex={index} seeRoadtrip={this._seeRoadtrip} layoutStyle="columns" />
                  )}
                />
              </View>
              :
              <View style={styles.noRoadtripsContainer}>
                <Text style={styles.noRoadtrips}>No roadtrips are available for this date</Text>
                <Text>😥</Text>
              </View>
          }
          <View style={styles.inlineDateBtns}>
            <TouchableOpacity onPress={this._getPrevRoadtrips} disabled={isFetchingRoadtrips} style={[styles.buttonManuallyChangeDate, styles.prev]}>
              <View style={styles.buttonManuallyChangeDate__icon}>
                <SvgUri width="20" height="20" source={require("../../../assets/icons/icon--goToBackWhite.svg")} />
              </View>
              <Text style={styles.buttonManuallyChangeDate__text}>{"Prev Date".toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._getNextRoadtrips} disabled={isFetchingRoadtrips} style={[styles.buttonManuallyChangeDate, styles.next]}>
              <View style={[styles.buttonManuallyChangeDate__icon, { transform: [{ rotate: "180deg" }] }] }>
                <SvgUri width="20" height="20" source={require("../../../assets/icons/icon--goToBackWhite.svg")} />
              </View>
              <Text style={styles.buttonManuallyChangeDate__text}>{"Next Date".toUpperCase()}</Text>
            </TouchableOpacity>
          </View>
        </View>
        {
          isLoggedIn &&
          <View style={styles.addBtn}>
            <TouchableOpacity onPress={() => navigation.navigate('AddARoadtrip')}>
              <SvgUri width="50" height="50" source={require("../../../assets/icons/icon--addARoadtripBtn.svg")} />
            </TouchableOpacity>
          </View>
        }
      </View>
    );
  }
}

export default withNavigationFocus(RListRoadtrips);