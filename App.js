// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './screen/HomeScreen';
// import AboutScreen from './screen/AboutScreen';

// const App = () => {
//   const Stack = createStackNavigator();

//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="HomeScreen"
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: '#456123',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             title: 'HomeScreen',
//           }}
//         />

//         <Stack.Screen
//           name="About"
//           component={AboutScreen}
//           options={{
//             title: 'AboutScreen',
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import Fristpage from "./pages/Fristpage";
// import SecondPage from "./pages/SecondPage";
// import ThirdPage from "./pages/ThirdPage";

// const Stack =createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName= "Fristpage"
//         screenOptions={{
//           //Set Header Color
//           headerStyle:{backgroundColor:'#afbc'},
//           //Set Header text Color
//           headerTintColor:'#000',
//           //Set Header text style
//           headerTitleStyle:{fontWeight:'bold'}
//         }}
//       >
//         <Stack.Screen name='Fristpage'
//          component={Fristpage}
//          options={{title:'Frist page'}}
//          />
//          <Stack.Screen name='SecondPage'
//          component={SecondPage}
//          options={{title:'Scond page'}}
//          />
//         <Stack.Screen name='ThirdPage'
//          component={ThirdPage}
//          options={{title:'Thrid page'}}
//          />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


// import { StyleSheet, Text, View ,Button} from 'react-native';
// import React from 'react';
// import { NavigationContainer } from "@react-navigation/native";
// import {createDrawerNavigator} from '@react-navigation/drawer';

// function HomeScreen  ({navigation})  {
//   return (
//     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//       <Button
//       title ='Go to notifications'
//       onPress={()=>navigation.navigate('Notifications')}
//       />
//     </View>
//   )
// }

// function NotificationScreen ({navigation})  {
//   return (
//     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//       <Button
//       title ='Go back home'
//       onPress={()=>navigation.goBack()}
//       />
//     </View>
//   )
// }
// const Drawer =createDrawerNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName='Home'>
//         <Drawer.Screen name='Home' component={HomeScreen}/>
//         <Drawer.Screen name ='Notification' component={NotificationScreen}/>
//       </Drawer.Navigator>
    
//     </NavigationContainer>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});



import React from "react";

import { View,Image,TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createDrawerNavigator} from '@react-navigation/drawer';


import Fristpage from "./pages/Fristpage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

const Stack =createStackNavigator();
const Drawer =createDrawerNavigator();

const NavigationDrawerStructure =(props)=>{
  //Structure for the navigation Drawer
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return(
    <View style={{flexDirection :'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={require('D:/Moblie/Mo1/assets/drawerWhite.png')}
          style={{width:25,height:25,marginLeft:5}}
        />

      </TouchableOpacity>
    </View>
  );
};
function firstScreenStack({navigation}) {
  return(
  <Stack.Navigator
        initialRouteName= "Fristpage"
        screenOptions={{
          //Set Header Color
          headerStyle:{backgroundColor:'#afbc'},
          //Set Header text Color
          headerTintColor:'#000',
          //Set Header text style
          headerTitleStyle:{fontWeight:'bold'},
          headerLeft:()=><NavigationDrawerStructure navigationProps={navigation}/>,
        }}
      >
        <Stack.Screen name='Fristpage'
         component={Fristpage}
         options={{title:'Frist page'}}
         />
         
  </Stack.Navigator>
  )
}

function SecondScreenStack({navigation}) {
  return(
    <Stack.Navigator
        initialRouteName= "Fristpage"
        screenOptions={{
          //Set Header Color
          headerStyle:{backgroundColor:'#afbc'},
          //Set Header text Color
          headerTintColor:'#000',
          //Set Header text style
          headerTitleStyle:{fontWeight:'bold'},
          headerLeft:()=><NavigationDrawerStructure navigationProps={navigation}/>,
        }}
      >
         <Stack.Screen name='SecondPage'
         component={SecondPage}
         options={{title:'Scond page'}}
         />
        <Stack.Screen name='ThirdPage'
         component={ThirdPage}
         options={{title:'Thrid page'}}
         />
      </Stack.Navigator>
  )
  
}



const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      drawerContentOptions={{
          activeTintColor:'#0000',
          itemStyle:{marginVertical:5}
        }}>
        
        <Drawer.Screen
        name ="FirstPage" component={firstScreenStack}
        />
        <Drawer.Screen
        name ="SecondPage" component={SecondScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;