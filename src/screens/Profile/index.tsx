import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ProfileContent} from '../../components/ProfileContent';

const ProfileStack = createStackNavigator();

export const ProfileScreen = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerTitleStyle: {color: '#2196f3'},
        cardStyle: {backgroundColor: '#FFF'},
        headerStyle: {shadowColor: 'transparent'},
      }}>
      <ProfileStack.Screen
        name="ShoppingCart"
        component={ProfileContent}
        options={{
          title: '',
          headerTitleStyle: {
            color: '#000',
            fontSize: 16,
            borderBottomColor: '#000',
            borderBottomWidth: 1,
          },
        }}
      />
    </ProfileStack.Navigator>
  );
};
