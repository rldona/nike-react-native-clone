import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

export const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SearchScreen</Text>
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
