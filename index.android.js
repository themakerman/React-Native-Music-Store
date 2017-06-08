//Place code in here for Android

//import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//create a component {component is a JS function that returns some amount of JSX}
//Component nesting :- Component Header placed inside component App
//If component returns multiple JSX components then they should be wrapped inside
//View Container else scenario will be like return 1 and return 2.
const App = () => {
  console.log('In Index.App Component');
    return (
      <View>
        <Header textProp={'Albums'} />
        <AlbumList />
      </View>
    );
};

//render it on device once component returns something
//Only the root component uses App Registry
AppRegistry.registerComponent('revise', () => App);
