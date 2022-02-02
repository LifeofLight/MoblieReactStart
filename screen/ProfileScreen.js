import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import React from 'react';
import {styles} from '../components/styles';

const ProfileScreen = ({navigation}) => {
  return (
     <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
            <View style={styles.container}>
              <Text style={styles.textTopStyle}>
                You are on Profile Screen
              </Text>
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

export default ProfileScreen;
