import React, { Component } from 'react';
import { Drawer } from 'native-base';
import NavBar from '../components/navbar';
import TabBar from '../components/tabbar';
import SideBar from '../components/sidebar';
import SearchBar from '../components/searchbar';

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Home',
      title1: 'king',
      selected: 0
    };
  }

  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  myCallback = (dataFromTab) => {
    this.setState({ selected: dataFromTab }, () => { console.log(this.state.selected); });
  };

   render() {  
    if (this.state.selected === 1) {
      return (
        <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}
        onOpen={() => this.openDrawer()}
        panOpenMask={0.25} 
        side="left"
        >
        <SearchBar title={this.state.title1} openDrawer={this.openDrawer} />
        <TabBar callbackFromParent={this.myCallback} />
        </Drawer>
      );
    }
    if (this.state.selected !== 1) {
      return (
        <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}
        onOpen={() => this.openDrawer()}
        panOpenMask={0.25} 
        side="left"
        >
        <NavBar title={this.state.title} openDrawer={this.openDrawer} />
        <TabBar callbackFromParent={this.myCallback} />
        </Drawer>
      );
    }
   }
}
export default HomeScreen;