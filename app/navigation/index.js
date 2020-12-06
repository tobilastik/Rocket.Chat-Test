import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import Welcome from '../screens/Welcome';
import Chat from '../screens/Chat';
// custom
// import BackButton from './custom/BackButton';


const Stack = createStackNavigator();

const Navigation = () => {
  
  return (
    <Stack.Navigator initialRouteName="Welcome" headerMode="screen">
      
        <>
          <Stack.Screen
            name="Welcome"
            options={{headerShown: false}}
            component={Welcome}
          />
          <Stack.Screen
            name="Chat"
            options={{headerShown: false}}
            component={Chat}
          />
        </>
     
    </Stack.Navigator>
  );
};

export default Navigation;
