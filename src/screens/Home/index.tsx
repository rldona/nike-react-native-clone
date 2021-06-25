import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {StyleSheet, Text, View} from 'react-native';

const HomeStack = createStackNavigator();

export const HomeScreen = () => {
  const HomeContent = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>HomeScreen</Text>
      </View>
    );
  };

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleStyle: {color: '#2196f3'},
        cardStyle: {backgroundColor: '#FFF'},
        headerStyle: {shadowColor: 'transparent'},
      }}>
      <HomeStack.Screen
        name="ShoppingCart"
        component={HomeContent}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
  },
});
