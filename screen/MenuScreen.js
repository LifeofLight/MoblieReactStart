import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Container, Header, Content, Button, ListItem, Icon, Left, Body, Right, Switch } from 'native-base';

import React from 'react';

const MenuScreen = ({navigation}) => {
  return (
     <ScrollView style={{flex:1}}>
    <View>
      <Text
      style={{
          color:'#33FF56',
          fontSize:20,
          fontWeight:'bold',
          padding:20,
      }}>
        เมนูหลัก
      </Text>
    {/* code from native base*/}
        <Content>
          <ListItem icon
           style={{marginBottom:10 ,marginTop:10}}
           onPress={()=> navigation.navigate('HomeStack')}
          >
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="home" />
              </Button>
            </Left>
            <Body>
              <Text>หน้าหลัก</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon
          onPress={()=> navigation.navigate('ProductStack')}
          >
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="cart" />
              </Button>
            </Left>
            <Body>
              <Text>สินค้า</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>
    </View>
    </ScrollView> 
  );
};

export default MenuScreen;

