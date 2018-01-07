import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';

const RouterComponent = () => {
    return (
        /*App starts with RouterComponent. Screens in the app sre defined 
        in router. Each screen is a scene with a key.Sometimes some screens
        are grouped together. Key of the scene is used for navigating.
        HomeScreen scene can be edited in /src/screens/HomeScreen
        SearchScreen scene can be edited in /src/screend/SearchScreen*/
        <Router>
            <Scene key='main'>
                <Scene key='home' component={HomeScreen} hideNavBar />
                <Scene key='search' component={SearchScreen} hideNavBar />
            </Scene>
        </Router>
    );
};
/*export this component to use in other part of the appliction*/
export default RouterComponent;
