import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {FavoritesContent} from '../../components/FavoritesContent';

const FavoritesStack = createStackNavigator();

export const FavoritesScreen = () => {
  const isFavoriteEdit = false; // TODO: Linkar con el estado de Redux

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
          title: 'Favoritos',
          headerTitleStyle: {
            color: '#000',
            fontSize: 16,
            borderBottomColor: '#000',
            borderBottomWidth: 1,
          },
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => console.log('Edit favorite !!')}>
              {isFavoriteEdit ? (
                <Text style={styles.text}>OK</Text>
              ) : (
                <Text style={styles.text}>Editar</Text>
              )}
            </TouchableOpacity>
          ),
        }}
      />
    </FavoritesStack.Navigator>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 16,
    paddingRight: 20,
  },
});
