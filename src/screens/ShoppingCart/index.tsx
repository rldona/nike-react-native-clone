import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {H1} from '../../components/H1';

import {Button} from '../../components/Button';

const ShoppigCartStack = createStackNavigator();

export const ShoppigCartScreen = () => {
  const ShoppingCartContent = () => {
    return (
      <View style={styles.container}>
        <H1>Cesta</H1>
        <View style={styles.buttonContainer}>
          <Button>Pasar por caja</Button>
        </View>
      </View>
    );
  };

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderTopWidth: 1,
    borderTopColor: '#DEDEDE',
    padding: 20,
  },
});
