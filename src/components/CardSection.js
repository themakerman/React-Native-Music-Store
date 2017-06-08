import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
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
    borderWidth: 0.5,
  }
};

export default CardSection;
