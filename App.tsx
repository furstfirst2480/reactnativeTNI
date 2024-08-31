import React, { useState } from "react";
import {View, Text} from 'react-native'
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import CreatePostScreen from "./screens/CreatePostScreen";

const App=(): React.JSX.Element => {
  const HomeStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={HomeScreen}/>
        <HomeStack.Screen name='About' component={AboutScreen}/>
        <HomeStack.Screen name='CreatePost' component={CreatePostScreen}/>
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
export default App;