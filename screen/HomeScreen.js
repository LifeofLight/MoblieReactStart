import { Text, View ,Button,SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from '../components/styles';
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
            <View style={styles.container}>
              <Text style={styles.textTopStyle}>
                Home Screen
              </Text>
              <Button style={styles.buttomStyle}
              title='GO to setting Tab'
              onPress={()=>navigation.navigate('SettingScreen')}
            />
              <Button style={styles.buttomStyle}
              title='Open News Screen'
            />
            <View style={{bottom:10,position:"absolute"}}>
            <Text style ={styles.textBottomSytle}>
              www.tni.ac.th
              </Text>
            </View>
            </View>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;


