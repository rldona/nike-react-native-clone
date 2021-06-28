import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {usePopular} from '../../hooks/usePopular';

import {Product} from '../Product';

interface Props {
  title: string;
}

export const HorizontalScroll = ({title}: Props) => {
  const {popular} = usePopular();

  if (popular.length === 0) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={popular}
        renderItem={({item}) => <Product {...item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScroll}
        ItemSeparatorComponent={() => <Text style={styles.text} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '400',

    paddingLeft: 20,
    marginBottom: 20,
  },
  horizontalScroll: {
    marginLeft: 15,
    paddingRight: 30,
  },
  text: {
    padding: 5,
  },
});
