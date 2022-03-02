import React,{useState,useEffect} from 'react';
import {StyleSheet, View,ActivityIndicator,FlatList} from 'react-native';
import { Container,Text, Header, Content, List, ListItem, Thumbnail, Left, Body, Right,Button } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {useFocusEffect}from'@react-navigation/native';
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';

const IoniconsHeaderButton = props => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const ProductScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="register"
            iconName="person-add"
            onPress={() => navigation.navigate('Register')}
          />
        </HeaderButtons>
      ),  
    });
  }, [navigation]);

  const [product,setProduct]=useState([]);
  //useEffect  จะทำงานเมื่อคลิกเมนูสินค้า
  const [loading,setLoading]=useState(false);

  let cancelToken;

    const getData = async ()=>{
      setLoading(true);
      const res = await axios.get('https://api.codingthailand.com/api/course',{
        cancelToken : cancelToken.token
      });
      //alert(JSON.stringify(res.data.data))//data ตัวแรกคือฟังชั่นของ axios ตัวที่ 2คือตัวของ arrayobj **ต้องแปลงไฟล์ JSON ด้วย**
      setProduct(res.data.data);
      setLoading(false);
    }

    //ทุกๆครั้งที่เข้าหน้า product หรือ focus ที่หน้า product
    //เราจะให้ไปดึงข้อมูลที่ server ตลอดเวลา
    useFocusEffect(
      //usecallback เอาไว้ optimize ฟังก์ชัน เพื่อไม่ให้ re-render ของ child component
      React.useCallback(()=>{
        cancelToken=axios.CancelToken.source();
        getData();
        return()=>{
         // alert('Exit ProductScreen');
          cancelToken.cancel();
        }
      },[])
    )
  // useEffect(()=>{
  //   // getData() for get data from backend
  //       getData();
  // },[])

  if (loading ===true){
    return(
      <View style={styles.container}>
        <ActivityIndicator
        color='#afbc'
        size='large'

        />
      </View>
    );
  }

  const _onRefresh =()=>{
    getData();
  }

  return (
    <View >
      <FlatList
      // dataใช้สำหรับวนรอบเพื่อแสดงข้อมูลใน backend
      data={product}
      //keyExtractor primary key(คีย์หลัก)
      keyExtractor={(item,index)=>item.id.toString()}
      //pull to refresh
      onRefresh={_onRefresh}
      refreshing={loading}//ถ้า refreshing เป็น true คือจะรอให้ refresh data
      //renderItem สำหรับ render UI ที่จะให้ user มองเห็น (return jsx)
      renderItem ={({item})=>(
         <ListItem thumbnail onPress={()=>{
           navigation.navigate('Detail',{
             id:item.id,
             title:item.title //นำค่า title จาก backend ส่งให้ตัวแปร title ไปยัง อีกหน้า
           });
         }}>
              <Left>
                <Thumbnail square source={{ uri: item.picture }} />
              </Left>
              <Body>
                <Text>{item.title}</Text>
                <Text note numberOfLines={1}>{item.detail}</Text>
              </Body>
              <Right>
                <Button danger>
                  <Text>{item.view}</Text>
                </Button>
              </Right>
            </ListItem>
      )}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});