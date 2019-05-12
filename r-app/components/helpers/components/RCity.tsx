import * as React from "react";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { blackColor, placeholderColor } from '../styles/colors';
import { contentS, contentRegular } from '../styles/typos';

const settings = require('../../../settings');


const inputDefault = {
  ...contentS,
  ...contentRegular,
}
export default class RCity extends React.PureComponent<any, any> {
  
  render() {
    const { onChooseCity, placeholder, value } = this.props;
    return (
        <GooglePlacesAutocomplete
          placeholder={placeholder}
          minLength={2}
          autoFocus={false}
          returnKeyType={'default'}
          fetchDetails={true}
          styles={{
            textInputContainer: {
              backgroundColor: "transparent",
              borderTopWidth: 0,
              borderBottomWidth:0,
              position: "relative",
              zIndex: 2
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
              backgroundColor: blackColor.dark,
              zIndex: 2
            }
          }}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: settings.apiKey,
            language: 'fr', // language of the results
            types: '(cities)' // default: 'geocode'
          }}
          currentLocation={false}
          getDefaultValue={() => value}
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            onChooseCity({
              data,
              details
            });
          }}
        />
    )
  }
}