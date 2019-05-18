import * as React from "react";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { fontBlackColor } from '../styles/colors';
import { contentS, contentRegular, contentXs, titleMedium } from '../styles/typos';

const settings = require('../../../settings');

const inputDefault = {
  ...contentS,
  ...contentRegular,
}
export default class RCity extends React.PureComponent<any, any> {
  
  render() {
    const { onChooseCity, placeholder, value, adressDetails } = this.props;

    let adressType;

    if (adressDetails === "city") {
      adressType = '(cities)'
    } else {
      adressType = 'geocode'
    }

    return (
        <GooglePlacesAutocomplete
          placeholder={placeholder}
          minLength={2}
          autoFocus={false}
          returnKeyType={'default'}
          fetchDetails={true}
          styles={{
            textInputContainer: {
   
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 38,
              color: '#5d5d5d',
              backgroundColor: "transparent",
              ...inputDefault,
            },
            listView: {
              position: "absolute",
              top: 50,
              backgroundColor: "transparent",
              zIndex: 2
            },
            description: {
              ...contentXs,
              ...fontBlackColor,
              ...titleMedium
            }
          }}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: settings.apiKey,
            language: 'fr', // language of the results
            types: adressType // default: 'geocode'
          }}
          currentLocation={false}
          getDefaultValue={() => value}
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            onChooseCity({
              details
            });
          }}
        />
    )
  }
}