import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {CatalogScreen} from './src/screens/Catalog';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {color: '#2196f3'},
          cardStyle: {backgroundColor: '#FFF'},
          headerStyle: {shadowColor: 'transparent'},
        }}>
        <Stack.Screen
          name="Home"
          component={CatalogScreen}
          options={{
            title: '',
            headerRight: () => <Text style={styles.text}>[Icon Search]</Text>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginRight: 20,
  },
});
