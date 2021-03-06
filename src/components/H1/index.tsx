import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const H1 = ({children}: any) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: '400',
    paddingLeft: 20,
    paddingBottom: 15,
  },
});
