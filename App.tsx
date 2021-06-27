import 'react-native-gesture-handler';
import React, {useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {HomeScreen} from './src/screens/Home';
import {CatalogStackScreen} from './src/screens/Catalog';
import {FavoritesScreen} from './src/screens/Favorites';
import {ShoppigCartScreen} from './src/screens/ShoppingCart';
import {ProfileScreen} from './src/screens/Profile';
import {StyleSheet} from 'react-native';

import {initialState, reducer, Context} from './src/context/options';

const Tab = createBottomTabNavigator();

// **********************************************************************************
// Hack: Reset Stack Inside Tab After Leaving Tab
// Source https://medium.com/react-native-school/react-navigation-v5-reset-stack-inside-tab-after-leaving-tab-d6f757778195
// **********************************************************************************

// interface Props {
//   navigation: any;
// }

// const resetHomeStackOnTabPress = ({navigation}: Props) => ({
//   tabPress: (e: any) => {
//     const state = navigation.dangerouslyGetState();
//     if (state) {
//       const nonTargetTabs = state.routes.filter((r: any) => r.key !== e.target);
//       nonTargetTabs.forEach((tab: any) => {
//         const stackKey = tab?.state?.key;
//         navigation.dispatch({
//           ...StackActions.popToTop(),
//           target: stackKey,
//         });
//       });
//     }
//   },
// });

// **********************************************************************************

export const App = () => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{store, dispatch}}>
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
            component={CatalogStackScreen}
            options={{
              title: '',
              tabBarIcon: () => (
                <EvilIcons name="search" size={30} color="#000" />
              ),
            }}
            // listeners={resetHomeStackOnTabPress}
          />
          <Tab.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{
              title: '',
              tabBarIcon: () => (
                <EvilIcons name="heart" size={30} color="#000" />
              ),
            }}
          />
          <Tab.Screen
            name="ShoppingCart"
            component={ShoppigCartScreen}
            options={{
              title: '',
              tabBarIcon: () => (
                <EvilIcons name="cart" size={30} color="#000" />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: '',
              tabBarIcon: () => (
                <EvilIcons name="user" size={30} color="#000" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};

const styles = StyleSheet.create({
  tabNavigator: {
    height: 65,
  },
});
