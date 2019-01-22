import * as React from "react";
import { View, Text, TouchableOpacity, FlatList, ScrollView, Dimensions } from "react-native";
import SvgUri from "react-native-svg-uri";

import { ComponentNavigationProps } from "../../helpers";

import Roadtrip from "./_components/Roadtrip";
import styles from "./_style";
import fakeRoadtrips from "./_data/fakeRoadtrips";


const width = Dimensions.get('window').width;

export default class RListRoadtrips extends React.PureComponent<ComponentNavigationProps> {
  constructor(props: any) {
    super(props);
    this._seeRoadtrip = this._seeRoadtrip.bind(this);
  }

  static navigationOptions = {
    header: null,
  };

  state = {
    filterBtn: "Filter".toUpperCase(),
    roadtrips: fakeRoadtrips,
  }
  
  _renderRoadtripsContainer = ({item}) => {
    return (
      <View style={{ width: width, flexWrap: "wrap" }}>
        <FlatList
          data={item.roadtrips}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({ item, index }) => <Roadtrip roadtrip={item} roadtripIndex={index} seeRoadtrip={this._seeRoadtrip} />}
        />
      </View>
    )
  }

  _renderSingleRoadtrip(data: object, index: number) {
    return 
  }

  _seeRoadtrip(roadtrip: object) {
    this.props.navigation.navigate("SingleRoadtrip", { roadtrip });
  }
  
  render() {
    const { filterBtn, roadtrips } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.profileBtn}>
            <SvgUri width="40" height="40" source={require("../../../assets/icons/icon--noProfile.svg")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.filterBtn}>{filterBtn}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.date}>03 December</Text>
        <View style={styles.content}>
            <FlatList
              data={roadtrips}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={true}
              keyExtractor={item => item.date}
              horizontal={true}
              renderItem={this._renderRoadtripsContainer} 
            />
        </View>
        <View style={styles.addBtn}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('AddARoadtrip')}>
            <SvgUri width="50" height="50" source={require("../../../assets/icons/icon--addARoadtripBtn.svg")} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}