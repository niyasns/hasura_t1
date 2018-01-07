/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import RouterComponent from './src/Router';

export default class App extends Component {

  render() {
    return (
      /* RouterComponent is used to navigate between screens,
       here router is mainly used to display SearchScreen when
      user clicked the search box in search tab. RouterComponent 
      can be customized in /src/Router.js */

      <RouterComponent />
    );
  }
}

