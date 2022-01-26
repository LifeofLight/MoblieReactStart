import { View, Text,Button,SafeAreaView } from 'react-native';
import React from 'react';
import {styles} from '../components/styles';

const Fristpage = ({navigation}) => {
  return (
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
            <View style={styles.container}>
                <Text style={styles.textTopStyle}>
                This is the Frist Page
                </Text>
           
            
            <Button style={styles.textBottomSytle}
              title='GO TO SECOND PAGE'
              onPress={()=>navigation.navigate('SecondPage')}
            />
            <Button style={styles.textBottomSytle}
              title='GO TO THIRD PAGE'
              onPress={()=>navigation.navigate('ThirdPage')}
            /> 
            </View>
        </View>
      </SafeAreaView>
  );
};

export default Fristpage;
