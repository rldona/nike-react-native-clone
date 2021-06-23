import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {H1} from '../../components/H1';
import {H2} from '../../components/H2';
import {ProductMenu} from '../../components/ProductMenu';
import {GenreSelector} from '../../components/GenreSelector';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const CatalogContent = () => {
  return (
    <ScrollView style={styles.container}>
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
          headerRight: () => <Text style={styles.text}>[Icon Search]</Text>,
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
