import { Text, View ,Component} from 'react-native'
import React from 'react'
import { Container,Icon, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import axios from 'axios';
import { Formik, Field } from 'formik';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { userStoreContext } from '../context/UserContext';
const LoginScreen = ({navigation}) => {
  
  const userStore =React.useContext(userStoreContext);
  
  return (
    <Container>
      <Content padder>
      <Formik
       initialValues={{
         //ต่าเริ่มต้นของข้อมูลโดยกำหนดให้ตรงกับ backend
         email: '',
         password: '',
       }}
       //เมื่อคลิกปุ่ม register ให้ทำงานส่วน
       onSubmit={async (values,{setSubmitting}) => {
         // same shape as initial values
         //alert(JSON.stringify(values));
         try {
          const url ='https://api.codingthailand.com/api/register';
          const res = await axios.post(url,{
             email:values.email,
             password:values.password
      });
     // alert(JSON.stringify(res.data))
     //เก็บ token ลงเครื่อง
     await AsyncStorage.setItem('@token',JSON.stringify(res.data));
     //get profile >> การทำงานที่ postman
      const urlProflie='https://api.codingthailand.com/api/profile';
      const resProfile=await axios.get(urlProflie,{
        headers:{
          Authorization:'Bearer '+res.data.access_token
        }
      });
        //alert(JSON.stringify(resProfile.data.data.user));
        //เก็บข้อมูล profile ลง asyncStorage  
        //get and update profile by context(gobalstate)
        await AsyncStorage.setItem('@profile',JSON.stringify(resProfile.data.data.user));
      
        const proflie =await AsyncStorage.getItem('@profile')
        userStore.updateProfile(JSON.parse(proflie))

        alert('เข้าสู่ระบบเรียบร้อยแล้ว');
        navigation.navigate('HomeScreen')
      } catch (error) {
          alert(error.response.data.message); 
        }
         finally{//ให้ปุ่มสามารถกลับมาคลิกได้อีก
            setSubmitting(false);
            
         }
       }}
     >
       {/*errors ใช้สำหรับการตรวจสอบ err ที่เกิดขึ้น (ถ้าผู้ใช้ไม่กรอกข้อมูลจะให้ err อะไรเกิดขึ้น)*/}
       {/*touched เมื่อผู้ใช้ไปกดที่ name และเลื่อนเมาส์ออกไปด้านนอกช่อง input โดยไม่กรอกข้อมูล */}

       {({ errors, touched,values,handleChange,handleBlur,handleSubmit,isSubmitting }) => (          
       <Form>
          <Item fixedLabel error={errors.email && touched.email?true:false}>
            <Label>Email</Label>
            <Input 
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />

            {errors.email && touched.email && <Icon name= 'close-circle'/>}
          </Item>
          {
              errors.email && touched.email &&(
                <Item>
                  <Label style={{color:'red'}}>{errors.email}</Label>
                </Item>
              )
            }
           <Item fixedLabel error={errors.password && touched.password?true:false}>
            <Label>Password</Label>
            <Input 
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />
            {errors.password && touched.password && <Icon name= 'close-circle'/>}

          </Item>
          {
              errors.password && touched.password &&(
                <Item>
                  <Label style={{color:'red'}}>{errors.password}</Label>
                </Item>
              )
            }
          <Button 
          onPress={handleSubmit}
          disabled={isSubmitting}
          block large style={{marginTop:30,backgroundColor:'#afbc'}}>
          <Text style={{fontSize:15,fontWeight:'bold'}}>Login</Text>
        </Button>
        </Form>
       )}
     </Formik>
      </Content>
    </Container>
  )
}

export default LoginScreen