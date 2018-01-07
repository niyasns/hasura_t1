import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Tabs, Tab, TabHeading, Icon } from 'native-base';
import Tab1 from './tabs/tab1';

export default class TabBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            flag0: true,
            flag1: false,
            flag2: false,
            flag3: false
        };
    }
    tabSelected = (i) => {
        this.setState({ selected: i.i }, function () {
            this.props.callbackFromParent(i.i);
            if (this.state.selected === 0) {
                this.setState({ 
                    flag0: true,
                    flag1: false,
                    flag2: false,
                    flag3: false });
            } else if (this.state.selected === 1) {
                this.setState({ 
                    flag0: false,
                    flag1: true,
                    flag2: false,
                    flag3: false });
            } else if (this.state.selected === 2) {
                this.setState({ 
                    flag0: false,
                    flag1: false,
                    flag2: true,
                    flag3: false });
            } else if (this.state.selected === 3) {
                this.setState({ 
                    flag0: false,
                    flag1: false,
                    flag2: false,
                    flag3: true });
            }
        }); 
        console.log(this.state.flag0);
        console.log(this.state.flag1);
        console.log(this.state.flag2);
        console.log(this.state.flag3);
    }

    render() {
        return (
            <Tabs tabBarUnderlineStyle={styles.tabBarUnderline} onChangeTab={this.tabSelected}>
                <Tab 
                heading={<TabHeading style={styles.tabHeading}>
                <Icon name="home" style={[styles.iconStyle, this.state.flag0 && styles.selectedIconStyle]} />
                </TabHeading>}
                >
                    <Tab1 />
                </Tab>
                <Tab 
                heading={<TabHeading style={styles.tabHeading} ><Icon name="home" style={[styles.iconStyle, this.state.flag1 && styles.selectedIconStyle]} /></TabHeading>} 
                
                >
                    <Tab1 />
                </Tab>
                <Tab 
                heading={<TabHeading style={styles.tabHeading}><Icon name="home" style={[styles.iconStyle, this.state.flag2 && styles.selectedIconStyle]} /></TabHeading>}
                >
                    <Tab1 />
                </Tab>
                <Tab 
                heading={<TabHeading style={styles.tabHeading}><Icon name="home" style={[styles.iconStyle, this.state.flag3 && styles.selectedIconStyle]} /></TabHeading>}
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
    },
    iconStyle: {
        fontSize: 30, 
        color: '#B0BEC5'
    },
    selectedIconStyle: {
        fontSize: 30, 
        color: '#29B6F6'
    }
});

