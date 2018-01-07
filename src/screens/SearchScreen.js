import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Item, Input, Button, Footer, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';

export default class SearchScreen extends Component {
/*SearchScreen is displayed when user touches the search bar in header
of search tab*/
   render() {  
    return (
        <Container style={styles.container}>
        <Header searchBar style={styles.header}> 
          <Item>
            <Button transparent onPress={() => Actions.pop()} style={{ paddingRight: 10 }}>
                <Icon name="arrow-back" size={25} color='#29B6F6' />
            </Button>
            <Input placeholder="Search Twitter" />
          </Item>
        </Header>
        <Footer style={styles.footer}>
            <View style={styles.buttontext}>
                <Button transparent>    
                    <Text style={styles.text}>All</Text>
                </Button>
                <Button transparent>
                    <Text style={styles.text}>Mentions</Text>
                </Button>
            </View>
            <View>
                <Button transparent>
                    <Icon size={30} color='#29B6F6' name='settings' />
                </Button>
            </View>
        </Footer>
      </Container>
    );
   }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between'
    },
    header: {
        backgroundColor: 'white',
    },
    footer: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,  
        height: 45
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 5,
        color: '#29B6F6'
    },
    buttontext: {
        flexDirection: 'row',
    }
});

