import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Details, Home } from '../screens';

const Stack = createNativeStackNavigator();

const Component = () => {
    return (
      <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Details" component={Details}/>
          <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    )
  }
  
  
  export default Component;