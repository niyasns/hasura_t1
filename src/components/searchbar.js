import React from 'react';
import { StyleSheet } from 'react-native';
import { Thumbnail, Header, Left, Button, Item, Input } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBar = (props) => {
  return (
    <Header hasTabs style={styles.header} searchBar rounded>
      <Left style={styles.left}>
        <Button transparent onPress={props.openDrawer}>
          <Thumbnail small source={require('./images/tw_profile.jpg')} />
        </Button>
      </Left>
      <Item style={styles.body}>
            <Input placeholder="  Search Twitter" />
        </Item>
        <Button iconRight transparent style={styles.end}> 
            <Icon name='person-add' color="#29B6F6" size={35} />
          </Button>
    </Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  title: {
    color: 'black',
  },
  left: {
    flex: 1,
  },
  body: {
    flex: 4.8,
    backgroundColor: '#CFD8DC',
    borderRadius: 45,
    height: 40
  },
  end: {  
    flex: 0.6,
    height: 40,
    marginLeft: 5,
  }
});

export default SearchBar;
