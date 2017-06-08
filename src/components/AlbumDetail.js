import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//Two types of props exists. Props which are passed down as attributes
// and props which are passed as children.
const AlbumDetail = (props) => {
  console.log('Inside Album Detail');
  console.log(props.albumDetailArrayProp.title);
  return (
    <Card>
      <CardSection>
        <View style={{ flexDirection: 'row', padding: 5 }}>
          <Image
              style={albumDetailStyle.thumbnail_imageStyle}
              source={{ uri: props.albumDetailArrayProp.thumbnail_image }}
          />
          <View style={{ flexDirection: 'column', paddingLeft: 5 }}>
            <Text>{props.albumDetailArrayProp.title}</Text>
            <Text>{props.albumDetailArrayProp.artist}</Text>
          </View>
        </View>
      </CardSection>

      <CardSection>
      <Image
          style={albumDetailStyle.imageStyle}
          source={{ uri: props.albumDetailArrayProp.image }}
      />
      </CardSection>

      <CardSection>
        <Button
          buttonText={'Buy'}
          onPress={() => Linking.openURL(props.albumDetailArrayProp.url)}
        />
      </CardSection>
    </Card>
  );
};

const albumDetailStyle = {
  thumbnail_imageStyle: {
    width: 50,
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },

  imageStyle: {
    width: null,
    height: 300,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default AlbumDetail;
