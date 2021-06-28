import React from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {getCurrentDate, wait} from '../../utils';

import {H1} from '../../components/H1';
import {Card} from '../../components/Card';
import {Divider} from '../../components/Divider';

const HomeStack = createStackNavigator();

export const HomeScreen = () => {
  const HomeContent = () => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <H1>Descubre</H1>
        <Text style={styles.date}>{getCurrentDate()}</Text>
        <Card
          title="Jorge Pelayo: habilidades técnicas"
          topic="Nuevo baloncesto"
          src="https://static.nike.com/a/images/f_auto/dpr_3.0/h_375,c_limit/0bafb728-2ae2-416f-bb18-5935801c8071/site-oficial-de-nike.png"
        />
        <Divider />
        <Card
          title="Alexia Putellas: habilidades prácticas"
          topic="Nuevo fútbol"
          src="https://static.nike.com/a/images/f_auto/dpr_3.0/h_375,c_limit/2c8754ce-6287-4e77-a198-1ad483fba257/site-oficial-de-nike.png"
        />
        <Divider />
        <Card
          title="María y Jorge: habilidades educativas"
          topic="Nuevo niños"
          src="https://static.nike.com/a/images/f_auto/dpr_3.0/h_375,c_limit/414db494-7ebc-4d53-bbff-58d50b380a24/site-oficial-de-nike.png"
        />
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      </ScrollView>
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
    marginTop: 80,
    paddingBottom: 130,
  },
  date: {
    paddingLeft: 20,
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 30,
  },
});
