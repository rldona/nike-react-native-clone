import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {IFilter} from '../../../models/index';

export const FilterSelectorItem = ({
  id,
  type,
  name,
  isActive,
  onFilterSelected,
}: IFilter) => {
  return (
    <TouchableOpacity
      style={[styles.item, isActive ? styles.itemActive : styles.item]}
      activeOpacity={1}
      onPress={() => {
        onFilterSelected(id, type);
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
    fontSize: 14,
    color: '#666',
  },
  textActive: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
  },
});
