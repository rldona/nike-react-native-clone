import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {SearchScreen} from '../Search';
import {Categories} from '../Categories';
import {ProductsScreen} from '../Products';

import {H1} from '../../components/H1';
import {H2} from '../../components/H2';
import {ProductMenu} from '../../components/ProductMenu';
import {GenreSelector} from '../../components/GenreSelector';

const Stack = createStackNavigator();

export const CatalogContent = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.paddingLateral}>
        <H1>Tienda</H1>
      </View>
      <GenreSelector />
      <View style={styles.paddingLateral}>
        <H2>Imprescindibles, superventas y más</H2>
      </View>
      <ProductMenu />
    </ScrollView>
  );
};

export const CatalogScreen = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {color: '#2196f3'},
        cardStyle: {backgroundColor: '#FFF'},
        headerStyle: {shadowColor: 'transparent'},
      }}>
      <Stack.Screen
        name="Home"
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
      <Stack.Screen
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
      <Stack.Screen
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
              onPress={() => navigation.goBack()}>
              <EvilIcons name="chevron-left" size={40} color="#000" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
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
              onPress={() => navigation.goBack()}>
              <EvilIcons name="chevron-left" size={40} color="#000" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paddingLateral: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    fontSize: 20,
    marginRight: 20,
  },
});
