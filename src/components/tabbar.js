import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Tabs, Tab, TabHeading } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Tab1 from './tabs/tab1';

export default class TabBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
    }
    tabSelected = (i) => {
        this.setState({ selected: i.i }, function () {
            this.props.callbackFromParent(i.i);
        }); 
    }
    render() {
        return (
            <Tabs tabBarUnderlineStyle={styles.tabBarUnderline} onChangeTab={this.tabSelected}>
                <Tab 
                heading={<TabHeading style={styles.tabHeading}>
                <Icon name="home" size={30} color="#B0BEC5" />
                </TabHeading>}
                >
                    <Tab1 />
                </Tab>
                <Tab 
                heading={<TabHeading style={styles.tabHeading} ><Icon name="search" size={30} color="#B0BEC5" /></TabHeading>} 
                
                >
                    <Tab1 />
                </Tab>
                <Tab 
                heading={<TabHeading style={styles.tabHeading}><Icon name="notifications" size={30} color="#B0BEC5" /></TabHeading>}
                >
                    <Tab1 />
                </Tab>
                <Tab 
                heading={<TabHeading style={styles.tabHeading}><Icon name="email" size={30} color="#B0BEC5" /></TabHeading>}
                >
                    <Tab1 />
                </Tab>
            </Tabs>
        );
    }
};

const styles = StyleSheet.create({
    tabHeading: {
        backgroundColor: 'white',
    },
    tabBarUnderline: {
        backgroundColor: '#29B6F6',
        height: 3
    }
});

