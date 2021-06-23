import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {IProductMenu} from '../../../models/index';

export const ProductMenuItem = ({title}: IProductMenu) => {
  return (
    <View style={styles.containerText}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  containerText: {
    borderBottomColor: '#FFF',
    borderBottomWidth: 3,
    backgroundColor: 'transparent',
    width: '100%',
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  text: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
