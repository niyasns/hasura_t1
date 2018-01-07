import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='main'>
                <Scene key='home' component={HomeScreen} hideNavBar />
                <Scene key='search' component={SearchScreen} hideNavBar />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
