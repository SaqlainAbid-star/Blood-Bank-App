import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../screens/Login";
import SignupScreen from "../screens/Signup";

import { GoogleSignin } from '@react-native-community/google-signin';

const Appstack = createStackNavigator();

const AuthStack = () => {

    
  useEffect(() => {
        // initialize the Google SDK
        GoogleSignin.configure({
            webClientId: '283667112041-r4cg2jt88vrckednkp6pojo8ofsglnc7.apps.googleusercontent.com',
          });
}, []);

    return (
        <Appstack.Navigator
            headerMode='none'>
            <Appstack.Screen name='Login' component={LoginScreen} />
            <Appstack.Screen name='Signup' component={SignupScreen} />
          
        </Appstack.Navigator>
    );
}

export default AuthStack;