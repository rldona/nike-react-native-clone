import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {StyleSheet, Text, View} from 'react-native';

const ProfileStack = createStackNavigator();

export const ProfileScreen = () => {
  const ProfileContent = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>ProfileScreen</Text>
      </View>
    );
  };

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerTitleStyle: {color: '#2196f3'},
        cardStyle: {backgroundColor: '#FFF'},
        headerStyle: {shadowColor: 'transparent'},
      }}>
      <ProfileStack.Screen
        name="ShoppingCart"
        component={ProfileContent}
        options={{
          title: 'Profile',
          headerTitleStyle: {
            color: '#000',
            fontSize: 16,
            borderBottomColor: '#000',
            borderBottomWidth: 1,
          },
        }}
      />
    </ProfileStack.Navigator>
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
