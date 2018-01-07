import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Container, Thumbnail, Left, Content, Card, CardItem, Text, Body } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab1 = () => {
    return (
        <Container>
            <Content>
                <Card style={{ paddingRight: 0 }}>
                    <CardItem style={{ paddingRight: 0 }}>
                        <Left style={styles.left}>
                            <Thumbnail source={require('../images/sitepoint.png')} />
                        </Left>
                        <Body style={styles.body}>
                            <View style={styles.titletext}>
                                <Text style={styles.titlehead}>SitePoint JavaScript</Text>
                                <Text style={styles.titleid}>@SitePoi..</Text>
                                <Text style={styles.titletime}>30m</Text>
                            </View>
                            <Text style={styles.subtext}>Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items</Text>
                            <Text style={styles.linktext}>https://t.co/xFox78juL1 #Angular </Text>
                        </Body>
                    </CardItem>
                    <CardItem cardBody style={styles.cardpic}>
                        <Image source={require('../images/tweet1.jpg')} style={styles.image} resizeMode='stretch' />    
                    </CardItem>
                    <CardItem style={styles.iconbar}>
                        <View style={styles.iconset}>
                            <Icon name='mode-comment' size={20} color='#B0BEC5' />
                            <Text style={styles.icontext}>60</Text>
                        </View>
                        <View style={styles.iconset}>
                        <Icon name='autorenew' size={20} color='#B0BEC5' />
                        <Text style={styles.icontext}>2</Text>
                        </View>
                        <View style={styles.iconset}>
                        <Icon name='favorite-border' size={20} color='#B0BEC5' />
                        <Text style={styles.icontext}>19</Text>
                        </View>
                        <View style={styles.iconset}>
                        <Icon name='email' size={20} color='#B0BEC5' />
                        </View>
                    </CardItem> 
                </Card>
                <Card style={{ paddingRight: 0 }}>
                    <CardItem style={{ paddingRight: 0 }}>
                        <Left style={styles.left}>
                            <Thumbnail source={require('../images/denny.jpg')} />
                        </Left>
                        <Body style={styles.body}>
                            <View style={styles.titletext}>
                                <Text style={styles.titlehead}>Denny JA</Text>
                                <Text style={styles.titleid}> @DennyJA_WORLD </Text>
                                <Text style={styles.titletime}>14m</Text>
                            </View>
                            <Text style={styles.subtext}>Share our love by stopping discrimination, in Indonesia and in the World. RT if you agree.</Text>
                            <Text style={styles.linktext}>#SOL2015 </Text>
                        </Body>
                    </CardItem>
                    <CardItem cardBody style={styles.cardpic}>
                        <Image source={require('../images/dennytweet.jpg')} style={styles.image} resizeMode='stretch' />    
                    </CardItem>
                    <CardItem style={styles.iconbar}>
                        <View style={styles.iconset}>
                            <Icon name='mode-comment' size={20} color='#B0BEC5' />
                            <Text style={styles.icontext}>148</Text>
                        </View>
                        <View style={styles.iconset}>
                        <Icon name='autorenew' size={20} color='#B0BEC5' />
                        <Text style={styles.icontext}>242K</Text>
                        </View>
                        <View style={styles.iconset}>
                        <Icon name='favorite-border' size={20} color='#B0BEC5' />
                        <Text style={styles.icontext}>11K</Text>
                        </View>
                        <View style={styles.iconset}>
                        <Icon name='email' size={20} color='#B0BEC5' />
                        </View>
                    </CardItem> 
                </Card>
                <Card style={{ paddingRight: 0 }}>
                    <CardItem style={{ paddingRight: 0 }}>
                        <Left style={styles.left}>
                            <Thumbnail source={require('../images/sachin.jpg')} />
                        </Left>
                        <Body style={styles.body}>
                            <View style={styles.titletext}>
                                <Text style={styles.titlehead}>sachin tendulkar</Text>
                                <Text style={styles.titleid}>@sachin_rt</Text>
                                <Text style={styles.titletime}>10m</Text>
                            </View>
                            <Text style={styles.subtext}>Wishing the Maestro, a very very happy birthday. May God bless you.</Text>
                            <Text style={styles.linktext}>@arrahman</Text>
                        </Body>
                    </CardItem>
                    <CardItem cardBody style={styles.cardpic}>
                        <Image source={require('../images/sachin_tweet.jpg')} style={styles.image} resizeMode='stretch' />    
                    </CardItem>
                    <CardItem style={styles.iconbar}>
                        <View style={styles.iconset}>
                            <Icon name='mode-comment' size={20} color='#B0BEC5' />
                            <Text style={styles.icontext}>60</Text>
                        </View>
                        <View style={styles.iconset}>
                        <Icon name='autorenew' size={20} color='#B0BEC5' />
                        <Text style={styles.icontext}>2</Text>
                        </View>
                        <View style={styles.iconset}>
                        <Icon name='favorite-border' size={20} color='#B0BEC5' />
                        <Text style={styles.icontext}>19</Text>
                        </View>
                        <View style={styles.iconset}>
                        <Icon name='email' size={20} color='#B0BEC5' />
                        </View>
                    </CardItem> 
                </Card>
            </Content>
        </Container>
    );
};

const styles = StyleSheet.create({
    left: {
        flex: 1
    },
    body: {
        flex: 4.5,
        paddingLeft: 5
    },
    titletext: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titlehead: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    titleid: {
        color: '#B0BEC5',
        fontSize: 14,
        paddingLeft: 5
    },
    titletime: {
        color: '#B0BEC5',
        fontSize: 14,
        paddingLeft: 5,
    },
    subtext: {
        fontSize: 14
    },
    linktext: {
        color: '#29B6F6',
        fontSize: 14
    },
    cardpic: {
        paddingLeft: 50,
        justifyContent: 'flex-end',
        paddingRight: 10
    },
    image: {
        height: 170,
        width: 265,
        borderRadius: 5
    },
    icontext: {
        color: '#B0BEC5',
        fontSize: 15
    },
    iconbar:
    {
        justifyContent: 'space-between',
        paddingLeft: 80
    },
    iconset: {
        flexDirection: 'row'
    }
});

export default Tab1;
