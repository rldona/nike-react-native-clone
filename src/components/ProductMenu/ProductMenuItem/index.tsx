import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {IMenuItem} from '../../../models/index';

export const ProductMenuItem = ({id, title}: IMenuItem) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate('Categories', {id})}
      style={styles.containerText}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
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
    fontSize: 17,
    fontWeight: 'bold',
  },
});
