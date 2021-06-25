import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Divider = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});
