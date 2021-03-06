// import { Text, View ,Button,SafeAreaView} from 'react-native';
// import React from 'react';
// import {styles} from '../components/styles';
// const HomeScreen = ({navigation}) => {
//   return (
//     <SafeAreaView style={{flex:1}}>
//         <View style={{flex:1}}>
//             <View style={styles.container}>
//               <Text style={styles.textTopStyle}>
//                 Home Screen
//               </Text>
//               <Button style={styles.buttomStyle}
//               title='GO to setting Tab'
//               onPress={()=>navigation.navigate('SettingScreen')}
//             />
//               <Button style={styles.buttomStyle}
//               title='Open News Screen'
//             />
//             <View style={{bottom:10,position:"absolute"}}>
//             <Text style ={styles.textBottomSytle}>
//               www.tni.ac.th
//               </Text>
//             </View>
//             </View>
//         </View>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;

import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';
import { userStoreContext } from '../context/UserContext';
const IoniconsHeaderButton = props => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeScreen = ({navigation}) => {
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

  //???????????????????????????????????? userStore ??????????????????????????????????????????
  const userStore =React.useContext(userStoreContext);

  return (
    <View style={styles.container}>
      <Ionicons name="home-outline" size={30} color="#33FF56"   />
      {
        userStore.profile &&
        <>
        <Text>
          ???????????????????????????????????? :{userStore.profile.name}
        </Text>
        <Text>
          ??????????????? :{userStore.profile.email}
        </Text>
        </>
      }
      
    
      <Text>????????????????????????</Text>
      <Button
        title="Go to About"
        onPress={() =>
          navigation.navigate('About', {email: 'wa.kornwara@tni.ac.th'})
        }  
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
