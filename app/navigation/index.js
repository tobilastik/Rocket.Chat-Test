import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import Welcome from '../screens/Welcome';
import Messages from '../screens/Messages';
import Chats from '../screens/Chats';
import Information from '../screens/Information';

const Stack = createStackNavigator();

const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" headerMode="screen">
      <>
        <Stack.Screen
          name="Welcome"
          options={{headerShown: false, cardStyleInterpolator: forFade}}
          component={Welcome}
        />
        <Stack.Screen
          name="Messages"
          options={{headerShown: false, cardStyleInterpolator: forFade}}
          component={Messages}
        />

        <Stack.Screen
          name="Chats"
          options={{headerShown: false, cardStyleInterpolator: forFade}}
          component={Chats}
        />
        <Stack.Screen
          name="Information"
          options={{headerShown: false}}
          component={Information}
        />
      </>
    </Stack.Navigator>
  );
};

export default Navigation;
