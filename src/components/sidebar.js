import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Thumbnail, Text, Content } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SideBar = () => {
  return (
    <Content style={{ backgroundColor: 'white'}}>
    <View>
      <View style={styles.Style}>
        <View style={{ flexDirection: 'column' }}>
          <Thumbnail style={styles.thumbnailStyle} source={require('./images/tw_profile.jpg')} />
          <Text style={styles.titleStyle}>NIYAS</Text>
          <Text style={{ paddingTop: 8, color: '#9E9E9E'}}>@niyasns041</Text>
          <Text style={{ flexDirection: 'row', paddingTop: 13 }}>
            <Text style={{ fontWeight: 'bold' }}>79</Text>
            <Text style={{ color: '#9e9e9e' }}>  Following</Text>
            <Text style={{ fontWeight: 'bold' }}>  23</Text>
            <Text style={{ color: '#9e9e9e' }}>  Followers</Text>
          </Text>
          <View
            style={{
              borderBottomColor: '#CFD8DC',
              borderBottomWidth: 1,
              marginLeft: -20,
              paddingTop: 10
            }}
          />
          <View style={{ marginTop: 15 }}>
            <View style={{ flexDirection: 'row' }}>  
              <Icon name="perm-identity" size={40} color='grey' />
              <Text style={styles.listitem}>  Profile</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 5 }}>  
              <Icon name="list" size={40} color='grey' />
              <Text style={styles.listitem}>  Lists</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 5 }}>  
              <Icon name="device-hub" size={40} color='grey' />
              <Text style={styles.listitem}>  Moments</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 5 }}>  
              <Icon name="dashboard" size={40} color='grey' />
              <Text style={styles.listitem}>  Highlights</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#CFD8DC',
              borderBottomWidth: 1,
              marginLeft: -20,
              paddingTop: 10
            }}
          />
          <View style={{ marginTop: 15 }}>
            <View style={{ flexDirection: 'row' }}>  
              <Text style={styles.listitem}>Settings and privacy</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 5 }}>  
              <Text style={styles.listitem}>Help Centre</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
        borderBottomColor: '#CFD8DC',
        borderBottomWidth: 1,
        marginLeft: -20,
        paddingTop: 50,
        flexDirection: 'column',
        justifyContent: 'flex-end'
        }}
      />
      <View style={styles.footer}>
        <Icon name='brightness-3' size={30} color='#29B6F6' />
        <Icon name='fingerprint' size={30} color='#29B6F6' />
      </View>
    </View>
  </Content>
  );
};

export default SideBar;

const styles = StyleSheet.create({ 
  Style: {
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingTop: 20,
    paddingLeft: 20,
  },
  thumbnailStyle: {
    alignItems: 'flex-start',
    
  },
  titleStyle: {
    paddingTop: 8,
    color: 'black', 
    alignItems: 'flex-start',
    fontWeight: 'bold',
    fontSize: 20
  },
  listitem: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,
    paddingTop: 8,
    justifyContent: 'flex-start'
  },
  footer:
  {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 20,
    justifyContent: 'space-between'
  }
});
