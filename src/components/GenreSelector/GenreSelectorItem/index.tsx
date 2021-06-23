import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {IGenre} from '../../../models/index';

export const GenreSelectorItem = ({
  id,
  name,
  isActive,
  onSelectGenre,
}: IGenre) => {
  return (
    <TouchableOpacity
      style={[styles.item, isActive ? styles.itemActive : styles.item]}
      activeOpacity={1}
      onPress={() => {
        onSelectGenre(id);
      }}>
      <Text style={[styles.text, isActive ? styles.textActive : styles.text]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: 30,
    paddingBottom: 20,
  },
  itemActive: {
    marginRight: 30,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
  textActive: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
});
