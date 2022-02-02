import { View, Text,Button,SafeAreaView } from 'react-native';
import React from 'react';
import {styles} from '../components/styles';

const SecondPage = ({navigation}) => {
  return (
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
            <View style={styles.container}>
                <Text style={styles.textTopStyle}>
                This is the Second Page
                </Text>
            <Button style={styles.textBottomSytle}
              title='GO TO FRIST PAGE'
              onPress={()=>navigation.navigate('Fristpage')}
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

export default SecondPage;
