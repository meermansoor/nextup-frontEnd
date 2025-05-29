import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import mainScreen from './src/Screens/homeScreen.js'
import ForgotPassword from "./src/Screens/forgotPasswordScreeen.js";
import SplashScreen from "./src/Screens/SplashScreen.js";
import StartPage from "./src/Screens/StartPage.js";
import SignIn_UpScreen from "./src/Screens/SignIn-UpScreen.js";
import SignInScreen from "./src/Screens/SignIn-Screen.js";
import SignUpScreen from "./src/Screens/SignUp-Screen.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='splashScr'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Home' component={mainScreen}/>
        <Stack.Screen name='forgot-password' component={ForgotPassword}/>
        <Stack.Screen name='splashScr' component={SplashScreen}/>
        <Stack.Screen name='start-page' component={StartPage}/>
        <Stack.Screen name='signin-up' component={SignIn_UpScreen}/>
        <Stack.Screen name='sign-in' component={SignInScreen}/>
        <Stack.Screen name='sign-up' component={SignUpScreen}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});