import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {IType} from '../../models';
import {useTypes} from '../../hooks/useTypes';
import {ProductTypeSelectorItem} from './ProductTypeSelectorItem';

export const ProductTypeSelector = () => {
  const {types, onSelectType} = useTypes();

  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {types.map((type: IType) => (
        <ProductTypeSelectorItem
          {...type}
          key={type.id}
          onSelectType={onSelectType}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    marginTop: 20,
    paddingLeft: 0,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
});
