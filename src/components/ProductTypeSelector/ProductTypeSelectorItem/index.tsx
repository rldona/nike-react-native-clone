import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {IType} from '../../../models';

export const ProductTypeSelectorItem = ({
  id,
  name,
  isActive,
  onSelectType,
}: IType) => {
  return (
    <TouchableOpacity
      style={[styles.item, isActive ? styles.itemActive : styles.item]}
      activeOpacity={1}
      onPress={() => {
        onSelectType(id);
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
    paddingLeft: 20,
    paddingRight: 20,
  },
  textActive: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
  },
});
