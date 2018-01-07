import React from 'react';
import { StyleSheet } from 'react-native';
import { Thumbnail, Header, Left, Body, Button, Title } from 'native-base';
/*Navbar is the header for all tabs except search tab*/
const NavBar = (props) => {
  return (
    <Header hasTabs style={styles.header}>
      <Left style={styles.left}>
        <Button transparent onPress={props.openDrawer}>
          <Thumbnail small source={require('./images/tw_profile.jpg')} />
        </Button>
      </Left>
      <Body style={styles.body}>
        <Title style={styles.title}>{props.title}</Title>
      </Body>
    </Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    justifyContent: 'space-around'
  },
  title: {
    color: 'black',
  },
  left: {
    flex: 1,
  },
  body: {
    flex: 5,
  }
});

export default NavBar;
