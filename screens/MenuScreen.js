import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Container, Header, Content, Button, ListItem, Icon, Left, Body, Right, Switch } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import axios from 'axios';
import { userStoreContext } from '../context/UserContext';
const MenuScreen = ({navigation}) => {
  //const [profile,setProflie]=React.useState(null);
  const userStore =React.useContext(userStoreContext);
  React.useEffect(()=>{
    const getProfile =async ()=>{
      const profile = await AsyncStorage.getItem('@proflie');
      if(profile){
        //setProflie(JSON.parse(profile));
        userStore.updateProfile(JSON.parse(profile));
      }
    }
    getProfile();
  },[]);
  return (
     <ScrollView style={{flex:1}}>
    <View
    style={{flex:1,
    justifyContent:'center',
  alignItems:'center',
height:150,
width:undefined}}
    >
      <Text
      style={{
          color:'#33FF56',
          fontSize:20,
          fontWeight:'bold',
          padding:20,
      }}>
        เมนูหลัก
      </Text>
      {/* แสดงข้อมูล proflie ที่เมนูด้านข้างต่อจากข้อความเมนูหลัก*/ }
      {
        userStore.profile&&(
          <>
          <Text
          style={{
            color:'#33FF56',
            fontSize:20,
            fontWeight:'bold'
          }}
          >
            Welcome{userStoreprofile.name}
          </Text>
          <Text
          style={{
            color:'#33FF56',
            fontSize:20,
            fontWeight:'bold'
          }}
          >
            email:{userStoreprofile.email}
          </Text>
          </>
        )
      }
      </View>
      <View>
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
          {!userStore.profile&&(
          <ListItem icon
          onPress={()=> navigation.navigate('Login')}
          >
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="Log-in" />
              </Button>
            </Left>
            <Body>
              <Text>เข้าสู่ระบบ</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          )}
          {userStore.profile&&(
          <ListItem icon
          onPress={async()=> {
            await AsyncStorage.removeItem('@token');
            await AsyncStorage.removeItem('@profile');
            userStore.updateProfile(null);
            navigation.closeDrawer();
          }}
          >
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="Log-out" />
              </Button>
            </Left>
            <Body>
              <Text>ออกจากระบบ</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          )}
        </Content>
        </View>
    </ScrollView> 
  );
};

export default MenuScreen;

