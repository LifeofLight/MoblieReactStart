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


import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Fristpage from "./pages/Fristpage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

const Stack =createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName= "Fristpage"
        screenOptions={{
          //Set Header Color
          headerStyle:{backgroundColor:'#afbc'},
          //Set Header text Color
          headerTintColor:'#000',
          //Set Header text style
          headerTitleStyle:{fontWeight:'bold'}
        }}
      >
        <Stack.Screen name='Fristpage'
         component={Fristpage}
         options={{title:'Frist page'}}
         />
         <Stack.Screen name='SecondPage'
         component={SecondPage}
         options={{title:'Scond page'}}
         />
        <Stack.Screen name='ThirdPage'
         component={ThirdPage}
         options={{title:'Thrid page'}}
         />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
