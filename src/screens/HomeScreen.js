import React, { Component } from 'react';
import { Drawer, Fab, Icon } from 'native-base';
import NavBar from '../components/navbar';
import TabBar from '../components/tabbar';
import SideBar from '../components/sidebar';
import SearchBar from '../components/searchbar';

export default class HomeScreen extends Component {
  /*Two state variables are initialized inside constructor.
  props are helpful in transfer data between parent and children 
  components. title state is used to change the text in header during
  tab change. title state is passed as a prop to Navbar. selected state 
  is used to receive selected tab id from TabBar using callback function */ 
  constructor(props) {
    super(props);
    this.state = {
      title: 'Home',
      selected: 0,
    };
  }
  /*function for close drawer*/
  closeDrawer = () => {
    this.drawer._root.close();
  };
  /*function for open drawer*/
  openDrawer = () => {
    this.drawer._root.open();
  };
  /*callback function receive selected tab id as parameter 'dataFromTab'.
  dataFromTab is then assigned to 'selected' state to use outside callback 
  function. */
  myCallback = (dataFromTab) => {
    this.setState({ selected: dataFromTab }, () => { console.log(this.state.selected); });
  };

  render() {  
    /*state 'title' is changed according to state 'selected'*/
    if (this.state.selected === 0) {
      this.state.title = 'Home';
    } 
    if (this.state.selected === 2) {
      this.state.title = 'Notifications';
    } 
    if (this.state.selected === 3) {
      this.state.title = 'Messages';
    } 
    /*if 'selected' state  is 1, then it points to search tab.
    In search tab , header need to be changed to SearchBar
    (/src/components/searchbar.js)*/
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
          <Icon name="add" style={{ fontSize: 35 }} />
        </Fab>
        </Drawer>
      );
    }
   }
}

