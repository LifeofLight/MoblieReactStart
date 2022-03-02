import React,{useState,useEffect} from 'react';
import {StyleSheet, View,ActivityIndicator,FlatList} from 'react-native';
import { Container,Text, Header, Content, List, ListItem, Thumbnail, Left, Body, Right,Button } from 'native-base';

import axios from 'axios';

const DetailScreen = ({navigation,route}) => {
  const{id , title}=route.params;
  React.useLayoutEffect(()=>{
    navigation.setOptions({
     // title:'รายละเอียดสินค้า'
      title: title
    })
  },[navigation])
  const [detail,setDetail]=useState([]);
  const [loading,setLoading]=useState(false);

  const getData = async (id)=>{
    setLoading(true);
    const res = await axios.get('https://api.codingthailand.com/api/course/'+id)
    setDetail(res.data.data);
    setLoading(false);
  }
useEffect(()=>{
        getData(id);
  },[id])
  const _onRefresh =()=>{
    getData(id);
  }
  return (
    <View >
      <FlatList
      // dataใช้สำหรับวนรอบเพื่อแสดงข้อมูลใน backend
      data={detail}
      //keyExtractor primary key(คีย์หลัก)
      keyExtractor={(item,index)=>item.ch_id.toString()}
      //pull to refresh
      onRefresh={_onRefresh}
      refreshing={loading}//ถ้า refreshing เป็น true คือจะรอให้ refresh data
      //renderItem สำหรับ render UI ที่จะให้ user มองเห็น (return jsx)
      renderItem ={({item,index})=>(
         <ListItem thumbnail>
              <Left>
                <Text>{index+1}</Text>
              </Left>
              <Body>
                <Text>{item.ch_title}</Text>
                <Text note numberOfLines={1}>{item.detail}</Text>
              </Body>
              <Right>
                <Button danger>
                  <Text>{item.ch_view}</Text>
                </Button>
              </Right>
            </ListItem>
      )}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});