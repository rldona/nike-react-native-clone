import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {FavoritesContent} from '../../components/FavoritesContent';

const FavoritesStack = createStackNavigator();

export const FavoritesScreen = () => {
  return (
    <FavoritesStack.Navigator
      screenOptions={{
        headerTitleStyle: {color: '#2196f3'},
        cardStyle: {backgroundColor: '#FFF'},
        headerStyle: {shadowColor: 'transparent'},
      }}>
      <FavoritesStack.Screen
        name="Favorites"
        component={FavoritesContent}
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
    </FavoritesStack.Navigator>
  );
};
