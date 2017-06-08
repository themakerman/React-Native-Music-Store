import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.cardViewTagStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  cardViewTagStyle: {
    backgroundColor: '#F8F8F8',
    borderStyle: 'solid',
    borderColor: '#000000',
    borderWidth: 0.1,
    margin: 10,
    marginBottom: 0,
    elevation: 10
  }
};


export default Card;
