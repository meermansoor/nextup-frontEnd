
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import mainScreen from '../Screens/homeScreen.js'
import ForgotPassword from "../Screens/forgotPasswordScreeen.js";
import SplashScreen from "../Screens/SplashScreen.js";
import StartPage from "../Screens/StartPage.js";
import SignIn_UpScreen from "../Screens/SignIn-UpScreen.js";
import SignInScreen from "../Screens/SignIn-Screen.js";
import SignUpScreen from "../Screens/SignUp-Screen.js";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
   <> <NavigationContainer>
    <Stack.Navigator 
      initialRouteName='splashScr'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='splashScr' component={SplashScreen}/>
      <Stack.Screen name='Home' component={mainScreen}/>
      <Stack.Screen name='forgot-password' component={ForgotPassword}/>
      <Stack.Screen name='start-page' component={StartPage}/>
      <Stack.Screen name='signin-up' component={SignIn_UpScreen}/>
      <Stack.Screen name='sign-in' component={SignInScreen}/>
      <Stack.Screen name='sign-up' component={SignUpScreen}/>
    </Stack.Navigator>
  </NavigationContainer>

  
  </>
  );
}
