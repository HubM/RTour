import * as React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { toJS } from "mobx";
import { inject, observer } from 'mobx-react';

import { uiValidColor, uiErrorColor, blackColor, grayColor } from '../styles/colors';
import styleMessageContainer from "../styles/messageManager";

@inject(stores => ({
  messageManagerContainer: toJS(stores.rootStore.messageManagerStore.messageManagerContainer),
  clearMessageManager: stores.rootStore.messageManagerStore.clearMessageManager
}))
@observer
class MessageManager extends React.Component<any> {
  
  render() {
    const {messageManagerContainer, clearMessageManager} = this.props;
    const { status, text} = messageManagerContainer;

    let messageManager;
    let messageManagerBackground = uiValidColor.light;
    let messageManagerTextColor = grayColor.light;

    switch (status) {
      case "info-negative": 
        messageManagerBackground = blackColor.light
        break;
      case "info-positive": 
        messageManagerBackground = grayColor.light;
        messageManagerTextColor = blackColor.dark
        break;
      case "valid":
        messageManagerBackground = uiValidColor.light
        break;
      case "error":
        messageManagerBackground = uiErrorColor.dark;
      break;
      default:
        messageManagerBackground = uiValidColor.light
        break;
    }

    if (text) {
      messageManager =       
        <TouchableOpacity style={[ styleMessageContainer.container, { backgroundColor: messageManagerBackground }]} onPress={() => clearMessageManager()}>
          <Text style={[ styleMessageContainer.text, { color: messageManagerTextColor}] }>
            {text}
          </Text>
        </TouchableOpacity>

        setTimeout(() => {
          clearMessageManager()
        }, 4000);
    }



    return (
      <View style={{
        position: "absolute", 
        top: "5%", 
        width: "80%", 
        left: "10%",
        zIndex: 1, 
      }}>
        {messageManager}
      </View>
    );
  }
}

export default MessageManager;