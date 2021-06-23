import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

export const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FavoritesScreen</Text>
    </View>
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
