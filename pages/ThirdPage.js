import { View, Text,Button,SafeAreaView } from 'react-native';
import React from 'react';
import {styles} from '../components/styles';

const ThirdPage = ({navigation}) => {
  return (
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
            <View style={styles.container}>
                <Text style={styles.textTopStyle}>
                This is the Third Page
                </Text>
            <Button style={styles.textBottomSytle}
              title='GO TO FIRST PAGE'
              onPress={()=>navigation.popToTop()}
            />
            <Button style={styles.textBottomSytle}
              title='GO TO SECOND PAGE'
              onPress={()=>navigation.navigate('SecondPage')}
            />
          </View>
        </View>
      </SafeAreaView>
  );
};

export default ThirdPage;
