import * as React from "react";
import { View, Text} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import SvgUri from "react-native-svg-uri";

export default class RCity extends React.PureComponent<any, any> {
  render() {
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
              backgroundColor: 'rgba(0,0,0,0)',
              borderTopWidth: 0,
              borderBottomWidth:0
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 38,
              color: '#5d5d5d',
              fontSize: 16
            },
            predefinedPlacesDescription: {
              color: '#1faadb'
            },
          }}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyCiHryd9UzwHp3gjCz-_RvKl3Aj9vbpaY8',
            language: 'fr', // language of the results
            types: '(cities)' // default: 'geocode'
          }}
          currentLocation={false}
        />
      </View>
    )
  }
}