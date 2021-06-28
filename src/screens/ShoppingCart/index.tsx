import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ShoppingCartContent} from '../../components/ShoppingCartContent';

const ShoppigCartStack = createStackNavigator();

export const ShoppigCartScreen = () => {
  return (
    <ShoppigCartStack.Navigator
      screenOptions={{
        headerTitleStyle: {color: '#2196f3'},
        cardStyle: {backgroundColor: '#FFF'},
        headerStyle: {shadowColor: 'transparent'},
      }}>
      <ShoppigCartStack.Screen
        name="ShoppingCart"
        component={ShoppingCartContent}
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
    </ShoppigCartStack.Navigator>
  );
};
