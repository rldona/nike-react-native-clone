import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {SearchScreen} from '../Search';
import {Categories} from '../Categories';
import {ProductsScreen} from '../Products';

import {CatalogContent} from '../../components/CatalogContent';
import {ProductDetail} from '../../components/ProductDetail';

const HomeStack = createStackNavigator();

export const CatalogStackScreen = () => {
  const navigation = useNavigation();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleStyle: {color: '#2196f3'},
        cardStyle: {backgroundColor: '#FFF'},
        headerStyle: {shadowColor: 'transparent'},
      }}>
      <HomeStack.Screen
        name="Shop"
        component={CatalogContent}
        options={{
          title: '',
          headerRight: () => (
            <Text
              style={styles.text}
              onPress={() => navigation.navigate('Search')}>
              <EvilIcons name="search" size={30} color="#000" />
            </Text>
          ),
        }}
      />
      <HomeStack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '',
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate('Shop')}>
              <EvilIcons name="chevron-left" size={40} color="#000" />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen
        name="Categories"
        component={Categories}
        options={{
          headerTitleStyle: {
            color: '#000',
            fontSize: 16,
            borderBottomColor: '#000',
            borderBottomWidth: 1,
          },
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate('Shop')}>
              <EvilIcons name="chevron-left" size={40} color="#000" />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          headerTitleStyle: {
            color: '#000',
            fontSize: 16,
            borderBottomColor: '#000',
            borderBottomWidth: 1,
          },
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate('Categories')}>
              <EvilIcons name="chevron-left" size={40} color="#000" />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerTitleStyle: {
            color: '#000',
            fontSize: 16,
            borderBottomColor: '#000',
            borderBottomWidth: 1,
          },
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.goBack()}>
              <EvilIcons name="chevron-left" size={40} color="#000" />
            </TouchableOpacity>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginRight: 20,
  },
});
