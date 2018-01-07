import React, { Component } from 'react';
import { Drawer, Fab, Icon } from 'native-base';
import NavBar from '../components/navbar';
import TabBar from '../components/tabbar';
import SideBar from '../components/sidebar';
import SearchBar from '../components/searchbar';

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Home',
      selected: 0,
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
    if (this.state.selected === 0) {
      this.state.title = 'Home';
    } 
    if (this.state.selected === 2) {
      this.state.title = 'Notifications';
    } 
    if (this.state.selected === 3) {
      this.state.title = 'Messages';
    } 

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
        <SearchBar openDrawer={this.openDrawer} />
        <TabBar iconColor={this.state.iconColor} callbackFromParent={this.myCallback} />
        <Fab
          position="bottomRight"
          style={{ backgroundColor: '#29B6F6' }} 
        >
          <Icon name="share" />
        </Fab>
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
        <TabBar iconColor={this.state.iconColor} callbackFromParent={this.myCallback} />
        <Fab
          style={{ backgroundColor: '#29B6F6' }}
          position="bottomRight" 
        >
          <Icon name="add" style={{ fontSize: 35 }}/>
        </Fab>
        </Drawer>
      );
    }
   }
}
export default HomeScreen;
