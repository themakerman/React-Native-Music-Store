//import library to make the component
import React from 'react';
import { Text, View } from 'react-native';

//Define the component which is always same as file name
//All core components accept a prop called style
const Header = (props) => {
  console.log('In Header Component');
    return (
      <View style={design.headerViewTagStyle}>
        <Text style={design.textTagStyle}>{props.textProp}</Text>
      </View>
  );
};

//Style prop takes input of object of object literals.
//textTagStyle,headerViewTagStyle are object literals
const design = {
  textTagStyle: {
    fontSize: 20,
    borderStyle: 'solid',
    borderColor: '#000000',
    width: 70
  },
  headerViewTagStyle: {
    backgroundColor: '#F8F8F8',
    borderStyle: 'solid',
    borderColor: '#000000',
    borderWidth: 0.5,
    elevation: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  }
};

//Export the component
export default Header;
