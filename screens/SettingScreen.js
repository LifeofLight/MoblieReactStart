import { StyleSheet, Text, View ,SafeAreaView,Button} from 'react-native';
import React from 'react';
import {styles} from '../components/styles';

const SettingScreen = ({navigation}) => {
  return (
        <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
            <View style={styles.container}>
              <Text style={styles.textTopStyle}>
                Setting Screen
              </Text>
              <Button style={styles.buttomStyle}
              title='Go to Home Tab'
              onPress={()=>navigation.navigate('HomeScreen')}
            />
              <Button style={styles.buttomStyle}
              title='Open News Screen'
            />
            <Button style={styles.buttomStyle}
              title='Open Profile Screen'
              onPress={()=>navigation.navigate('ProfileScreen')}
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

export default SettingScreen;

