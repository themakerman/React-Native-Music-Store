import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={buttonStyle.buttonViewStyle}>
        <Text style={buttonStyle.textStyle}>{props.buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};


const buttonStyle = {
    buttonViewStyle: {
      alignItems: 'center',
      margin: 12
    },
    textStyle: {
      marginTop: 10,
      marginBottom: 10,
      borderStyle: 'solid',
      borderColor: '#2196f3',
      borderWidth: 1.5,
      padding: 10,
      paddingLeft: 140,
      paddingRight: 140,
      color: '#2196f3',
      borderRadius: 10
    }
};

export default Button;
