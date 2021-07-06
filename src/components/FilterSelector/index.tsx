import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {IFilter} from '../../models';
import {useFilters} from '../../hooks/useFilters';
import {FilterSelectorItem} from './FilterSelectorItem';

export const FilterSelector = ({filterType, filterList}: any) => {
  const {onFilterSelected} = useFilters(filterType, filterList);

  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {filterList.map((item: IFilter) => (
        <FilterSelectorItem
          {...item}
          key={item.id}
          onFilterSelected={onFilterSelected}
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
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
});
