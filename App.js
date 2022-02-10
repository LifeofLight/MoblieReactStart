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


//drawertap
// import React from "react";

// import { View,Image,TouchableOpacity } from "react-native";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createDrawerNavigator } from '@react-navigation/drawer';


// import Fristpage from "./pages/Fristpage";
// import SecondPage from "./pages/SecondPage";
// import ThirdPage from "./pages/ThirdPage";
// import CustomSidebarMenu from "./pages/CustomSidebarMenu"

// const Stack =createStackNavigator();
// const Drawer =createDrawerNavigator();

// const NavigationDrawerStructure =(props)=>{
//   //Structure for the navigation Drawer
//   const toggleDrawer = () => {
//     props.navigationProps.toggleDrawer();
//   };
//   return(
//     <View style={{flexDirection :'row'}}>
//       <TouchableOpacity onPress={() => toggleDrawer()}>
//         <Image
//           source={require('D:/Moblie/Mo1/assets/drawerWhite.png')}
//           style={{width:25,height:25,marginLeft:5}}
//         />

//       </TouchableOpacity>
//     </View>
//   );
// };
// function firstScreenStack({navigation}) {
//   return(
//   <Stack.Navigator
//         initialRouteName= "Fristpage"
//         screenOptions={{
//           //Set Header Color
//           headerStyle:{backgroundColor:'#afbc'},
//           //Set Header text Color
//           headerTintColor:'#000',
//           //Set Header text style
//           headerTitleStyle:{fontWeight:'bold'},
//           headerLeft:()=><NavigationDrawerStructure navigationProps={navigation}/>,
//         }}
//       >
//         <Stack.Screen name='Fristpage'
//          component={Fristpage}
//          options={{title:'Frist page'}}
//          />
         
//   </Stack.Navigator>
//   )
// }

// function SecondScreenStack({navigation}) {
//   return(
//     <Stack.Navigator
//         initialRouteName= "Fristpage"
//         screenOptions={{
//           //Set Header Color
//           headerStyle:{backgroundColor:'#afbc'},
//           //Set Header text Color
//           headerTintColor:'#000',
//           //Set Header text style
//           headerTitleStyle:{fontWeight:'bold'},
//           headerLeft:()=><NavigationDrawerStructure navigationProps={navigation}/>,
//         }}
//       >
//          <Stack.Screen name='SecondPage'
//          component={SecondPage}
//          options={{title:'Scond page'}}
//          />
//         <Stack.Screen name='ThirdPage'
//          component={ThirdPage}
//          options={{title:'Thrid page'}}
//          />
//       </Stack.Navigator>
//   )
  
// }



// const App = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator 
//       drawerContentOptions={{
//           activeTintColor:'#aaffb0',
//           itemStyle:{marginVertical:5},
//         }}
//       drawerContent = {(props)=><CustomSidebarMenu {...props}/>}
//       >
        
//         <Drawer.Screen
//         name ="FirstPage" component={firstScreenStack}
//         />
//         <Drawer.Screen
//         name ="SecondPage" component={SecondScreenStack}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };


//bottomtab
// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';

// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from'@react-navigation/bottom-tabs';
// import Ionicons from'react-native-vector-icons/Ionicons';

// function HomeScreen() {
//   return(
//     <View style ={{flex:1,justifyContext:'center',alignItems:'center'}}>
//       <Text>Home!</Text>
//     </View>

//   )
// }
// function SettingScreen(params) {
//   return(
//     <View style ={{flex:1,justifyContext:'center',alignItems:'center'}}>
//       <Text>Settings!</Text>
//     </View>
//   )
// }

// const Tab =createBottomTabNavigator();

// function App() {
//   return(
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({route})=>({
//           tabBarIcon:({focused,color})=>{
//             let iconName;
//             if(route.name === 'Home'){
//               iconName=focused? 'ios-information-circle'
//                                 :'ios-information-circle-outline';
//             }
//             else if (route.name==='Setting'){
//               iconName=focused? 'ios-list-box'
//                                 :'ios-list';
//             }
//           return <Ionicons name={iconName} color={color}/>
//           },
//         })}
//     tabBarOptions={{
//       activeTintColor:'#afcc',
//       inactiveTintColor:'gray'
//     }}
//       >
//         <Tab.Screen name="Home" component={HomeScreen}/>
//         <Tab.Screen name="Setting" component={SettingScreen}/>
//       </Tab.Navigator>
//     </NavigationContainer>

//   )
// }

// export default App;

//การบ้าน 2/2/2022

// import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
// import React from 'react';

// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from'@react-navigation/bottom-tabs';
// import Ionicons from'react-native-vector-icons/Ionicons';
// import { createStackNavigator } from "@react-navigation/stack";

// import HomeScreen from'./screen/HomeScreen';
// import ProfileScreen from'./screen/ProfileScreen';
// import SettingScreen from'./screen/SettingScreen';

// const Tab =createBottomTabNavigator();
// const Stack = createStackNavigator();

// function HomeStack({navigation}) {
//   return(
//      <Stack.Navigator
//         initialRouteName= "HomeScreen"
//         screenOptions={{
//           //Set Header Color
//           headerStyle:{backgroundColor:'#afbc'},
//           //Set Header text Color
//           headerTintColor:'#000',
//           //Set Header text style
//           headerTitleStyle:{fontWeight:'bold'},
//         }}
//       >
//         <Stack.Screen name='HomeScreen'
//          component={HomeScreen}
//          options={{title:'Home Page'}}
//          />
//   </Stack.Navigator>
//   )
// }
// function SettingStack({navigation}) {
//   return(
//      <Stack.Navigator
//         initialRouteName= "HomeScreen"
//         screenOptions={{
//           //Set Header Color
//           headerStyle:{backgroundColor:'#afbc'},
//           //Set Header text Color
//           headerTintColor:'#000',
//           //Set Header text style
//           headerTitleStyle:{fontWeight:'bold'},
//         }}
//       >
//         <Stack.Screen name='SettingScreen'
//          component={SettingScreen}
//          options={{title:'Setting Page'}}
//          />
//          <Stack.Screen name ='ProfileScreen'
//          component={ProfileScreen}
//          options={{title:'Profile Page'}}
//          />
//   </Stack.Navigator>
//   )
// }

// function App() {
//   return(
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({route})=>({
//           tabBarIcon:({focused})=>{
//             let iconName;
//             if(route.name === 'Home'){
//               iconName=focused? 
//               <Image source={require('./assets/logo1.png')}
//           style={{width:25,height:25}}/>
//             :<Image source={require('./assets/logo2.png')}
//           style={{width:25,height:25,marginLeft:5}}/>;
//             }
//             else if (route.name==='Setting'){
//               iconName=focused
//               ? <Image source={require('./assets/logo1.png')}
//           style={{width:25,height:25,marginLeft:5}}/>
//             :<Image source={require('./assets/logo3.png')}
//           style={{width:25,height:25,marginLeft:5}}/>;
//             }
//           return iconName;
//           },
//         })}
//     tabBarOptions={{
//       activeTintColor:'#afcc',
//       inactiveTintColor:'gray'
//     }}
//       >
//         <Tab.Screen name="Home" component={HomeStack}/>
//         <Tab.Screen name="Setting" component={SettingStack}/>
//       </Tab.Navigator>

//     </NavigationContainer>

//   )
// }

// export default App;

import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from'react-native-vector-icons/Ionicons';
import { createStackNavigator } from "@react-navigation/stack";


import HomeScreen from'./screen/HomeScreen';
import DetailScreen from'./screen/DetailScreen';
import AboutScreen from'./screen/AboutScreen';
import ProductScreen from './screen/ProductScreen';
import MenuScreen from './screen/MenuScreen';
import RegisterScreen from './screen/RegisterScreen';

const Drawer =createDrawerNavigator();
const Stack =createStackNavigator();



function HomeStack({navigation}) {
  return(
  <Stack.Navigator
        initialRouteName= "HomeScreen"
        screenOptions={{
          //Set Header Color
          headerStyle:{backgroundColor:'#afbc'},
          //Set Header text Color
          headerTintColor:'#000',
          //Set Header text style
          headerTitleStyle:{fontWeight:'bold'},
        }}
      >
        <Stack.Screen name='HomeScreen'
         component={HomeScreen}
         options={{title:'หน้าหลัก'}}
         />
         <Stack.Screen
         name ='About'
         component={AboutScreen}
         options={{title :'เกี่ยวกับเรา'}}
         />
         <Stack.Screen 
         name= 'Register'
         component={RegisterScreen}
         options ={{title :'ลงทะเบียร'}}
         />
         
  </Stack.Navigator>
  )
}

function ProductStack({navigation}) {
  return(
    <Stack.Navigator
        initialRouteName= "HomeScreen"
        screenOptions={{
          //Set Header Color
          headerStyle:{backgroundColor:'#afbc'},
          //Set Header text Color
          headerTintColor:'#000',
          //Set Header text style
          headerTitleStyle:{fontWeight:'bold'},
        }}
      >
         <Stack.Screen name='ProductScreen'
         component={ProductScreen}
         />
        <Stack.Screen name='Detail'
         component={DetailScreen}
         />
      </Stack.Navigator>
  )
  
}


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      initialRouteName ="HomeStack"
      drawerPosition ="left"
      drawerContentOptions={{
          activeTintColor:'#aaffb0',
          itemStyle:{marginVertical:5},
        }}
      drawerContent = {(props)=><MenuScreen {...props}/>}
      >
        
        <Drawer.Screen
        name ="HomeStack" component={HomeStack}
        />
        <Drawer.Screen
        name ="ProductStack" component={ProductStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;