import * as React from "react";
import SvgUri from "react-native-svg-uri";
import { toJS } from "mobx";
import moment from "moment";
import { inject, observer } from 'mobx-react';
import { withNavigation } from "react-navigation";
import { View, Text, TouchableOpacity, FlatList, Dimensions } from "react-native";

import styles from "./_style";

import Roadtrip from "./_components/Roadtrip";

const width = Dimensions.get('window').width;

interface RListRoadtripsState {
  filterBtn: string,
  date: string
}

interface RListRoadtripsProps {
  isLoggedIn: boolean,
  appState: object,
  roadtrips: Array<Object>,
  getRoadtrips(date: string): void,
  isFetchingRoadtrips: boolean
}

@inject(stores => ({
  isLoggedIn: stores.rootStore.userStore.isLoggedIn,
  roadtrips: toJS(stores.rootStore.roadtripsStore.roadtrips).flat(),
  getRoadtrips: stores.rootStore.roadtripsStore.getRoadtrips,
  isFetchingRoadtrips: stores.rootStore.roadtripsStore.isFetchingRoadtrips,
}))
@observer
class RListRoadtrips extends React.Component<RListRoadtripsProps, RListRoadtripsState> {
  constructor(props: RListRoadtripsProps) {
    super(props);
    this._seeRoadtrip = this._seeRoadtrip.bind(this);
    this._getPrevRoadtrips = this._getPrevRoadtrips.bind(this);
    this._getNextRoadtrips = this._getNextRoadtrips.bind(this);

    this.state = {
      filterBtn: "Filter".toUpperCase(),
      date: moment().format('DD/MM/YYYY')
    }
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const { date } = this.state;
    this.props.getRoadtrips(date);
  }

  _getPrevRoadtrips() {
    const { date } = this.state;
    const newDate = moment(date, "DD/MM/YYYY").subtract(1, 'day').format("DD/MM/YYYY");

    this.setState({
      ...this.state,
      date: newDate
    }, () => {
      this.props.getRoadtrips(newDate);
    })
  }

  _getNextRoadtrips() {
    const { date } = this.state;
    const newDate = moment(date, "DD/MM/YYYY").add(1, 'day').format("DD/MM/YYYY");

    this.setState({
      ...this.state,
      date: newDate
    }, () => {
      this.props.getRoadtrips(newDate)
    });
  }

  _renderRoadtripsContainer = ({ item, index }) => (
    <View style={[styles.roadtripPerDayContainer, { width }]}>
      <Roadtrip roadtrip={item} roadtripIndex={index} seeRoadtrip={this._seeRoadtrip} />
    </View>
  )

  _seeRoadtrip(roadtrip: object) {
    const { navigation } = this.props;
    navigation.navigate("SingleRoadtrip", { roadtrip });
  }


  render() {
    const { filterBtn, date } = this.state;
    const { navigation, roadtrips, isLoggedIn, isFetchingRoadtrips } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {
            isLoggedIn
              ?
              <TouchableOpacity style={styles.profileBtn} onPress={() => navigation.navigate('Profile')}>
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
          <Text style={styles.date}>{date}</Text>
          {
            roadtrips.length > 0
              ?
              <View style={[styles.roadtripPerDayContainer, { width }]}>
                <FlatList
                  data={roadtrips}
                  keyExtractor={item => item._id}
                  numColumns={2}
                  renderItem={({ item, index }) => <Roadtrip roadtrip={item} roadtripIndex={index} seeRoadtrip={this._seeRoadtrip} />}
                />
              </View>
              :
              <View style={styles.noRoadtripsContainer}>
                <Text style={styles.noRoadtrips}>No roadtrips are available for this date</Text>
                <Text>😥</Text>
              </View>
          }
          {
            !isFetchingRoadtrips
            &&
            <View style={styles.inlineDateBtns}>
              <TouchableOpacity style={styles.inlineDateBtns__prev} onPress={this._getPrevRoadtrips}>
                <Text style={styles.inlineDateBtns__text}>Prev Date</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.inlineDateBtns__next} onPress={this._getNextRoadtrips}>
                <Text style={styles.inlineDateBtns__text}>Next Date</Text>
              </TouchableOpacity>
            </View>
          }
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

export default withNavigation(RListRoadtrips);