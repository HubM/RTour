import * as React from "react";
import { View, Text} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import SvgUri from "react-native-svg-uri";
const settings = require('../../../settings');
export default class RCity extends React.PureComponent<any, any> {
  
  render() {
    const { onChooseCity } = this.props;
    return (
      <View>
        <GooglePlacesAutocomplete
          placeholder='Enter Location'
          minLength={2}
          autoFocus={false}
          returnKeyType={'default'}
          fetchDetails={true}
          styles={{
            textInputContainer: {
              backgroundColor: 'transparent',
              borderTopWidth: 0,
              borderBottomWidth:0
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 38,
              color: '#5d5d5d',
              fontSize: 16
            }
          }}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: settings.apiKey,
            language: 'fr', // language of the results
            types: '(cities)' // default: 'geocode'
          }}
          currentLocation={false}
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            onChooseCity({
              data,
              details
            });
          console.log("CHOICE =>", data, "DETAILS CHOICE =>",details);
          }}
        />
      </View>
    )
  }
}