import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const H2 = ({children}: any) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
});
