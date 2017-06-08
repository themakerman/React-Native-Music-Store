//importing libraries for making component
import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//making a component
class AlbumList extends Component {

  //Default state of component. State is a keyword.
  state = { albums: [] };

  componentWillMount() {
    console.log('Inside componentWillMount()');
    //Https ensures data is passed encrypted thus protecting app from MITM attack
    //This is async function call whose responsibility is to fetch network data.
    //async cause we have no idea how much time it can take. So app should stay
    //inside componentWillMount till this request is complete and then should execute
    //render() method.[eg check: net disconnect method]
    console.log(this.state);
    console.log(axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((responseObject) => this.setState(this.state.albums = responseObject.data)));
  }

  //This method creates array of components. <AlbumDetail> Component is stored in array.
  renderAlbumList() {
    var albumDetail = [];
    albumDetail = this.state.albums.map((albumDetailTemp) =>
    <AlbumDetail key={albumDetailTemp.title} albumDetailArrayProp={albumDetailTemp} />);
    console.log('Inside renderAlbumList');
    console.log(albumDetail);
    return albumDetail;
  }

  //This method returns JSX
  render() {
    console.log('Inside render() method');
    console.log('State is :- ');

    return (
      <ScrollView>
        {this.renderAlbumList()}
      </ScrollView>
    );
  }
}

//making the component available to the rest of App
export default AlbumList;
