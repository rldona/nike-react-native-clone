import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {Context} from '../../context/options';

import {SearchScreen} from '../Search';
import {Categories} from '../Categories';
import {ProductsScreen} from '../Products';
import {CatalogContent} from '../../components/CatalogContent';
import {ProductDetail} from '../../components/ProductDetail';

const HomeStack = createStackNavigator();

export const CatalogStackScreen = () => {
  const {dispatch}: any = useContext(Context);
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
              onPress={() => navigation.goBack()}>
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
          headerRight: () => (
            <View style={styles.prodcutIcons}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() =>
                  dispatch({type: 'SHOW_PRODUCT_FILTER_MODAL', payload: true})
                }>
                <Ionicons name="options" size={23} color="#000" />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate('Search')}>
                <EvilIcons name="search" size={25} color="#000" />
              </TouchableOpacity>
            </View>
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
  prodcutIcons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: 10,
    width: 60,
  },
  text: {
    fontSize: 20,
    marginRight: 20,
  },
});
