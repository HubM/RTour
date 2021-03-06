import * as React from "react";
import { withNavigation } from 'react-navigation';
import { View } from 'react-native';
import RCity from '../../helpers/components/RCity';

import styles from "./_style";
import BackArrow from '../../helpers/components/BackArrow';

class RChooseCity extends React.Component<any, any> {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation } = this.props;
    const { goBackCityData, type, value, adressDetails, placeholder } = navigation.state.params;
    return (
      <View style={styles.container}> 
        <View style={styles.header}>
          <BackArrow color="black" navigationRoute="back" />
        </View>
        <View style={styles.content}>
          <RCity
            placeholder={placeholder}
            onChooseCity={(details: object) => {
              goBackCityData({
                city: { ...details },
                type
                })
              navigation.pop()
              }
            }
            value={value}
            adressDetails={adressDetails}
          />
        </View>
      </View>
    )
  }
}

export default withNavigation(RChooseCity)