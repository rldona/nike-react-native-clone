import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {IPopular} from '../../models';

import {Product} from '../Product';

interface Props {
  title: string;
}

export const HorizontalScroll = ({title}: Props) => {
  const [popular, setPopular] = useState<IPopular[]>([]);

  const getPopular = async () => {
    const categorieList = await (
      await fetch('http://localhost:3000/popular')
    ).json();

    setPopular(categorieList);
  };

  useEffect(() => {
    getPopular();
  }, []);

  if (popular.length === 0) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={popular}
        renderItem={({item}) => (
          <Product title={item.title} image={item.backdrop} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScroll}
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
  },
});
