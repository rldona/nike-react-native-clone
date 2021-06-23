import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {HomeScreen} from './src/screens/Home';
import {CatalogScreen} from './src/screens/Catalog';
import {FavoritesScreen} from './src/screens/Favorites';
import {ShoppigCartScreen} from './src/screens/ShoppingCart';
import {ProfileScreen} from './src/screens/Profile';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Catalog"
        tabBarOptions={{tabStyle: styles.tabNavigator}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '',
            tabBarIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#000" />
            ),
          }}
        />
        <Tab.Screen
          name="Catalog"
          component={CatalogScreen}
          options={{
            title: '',
            tabBarIcon: () => (
              <EvilIcons name="search" size={30} color="#000" />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            title: '',
            tabBarIcon: () => <EvilIcons name="cart" size={30} color="#000" />,
          }}
        />
        <Tab.Screen
          name="ShoppingCart"
          component={ShoppigCartScreen}
          options={{
            title: '',
            tabBarIcon: () => <EvilIcons name="heart" size={30} color="#000" />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: '',
            tabBarIcon: () => <EvilIcons name="user" size={30} color="#000" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabNavigator: {
    height: 65,
  },
});
