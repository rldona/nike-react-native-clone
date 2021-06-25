import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';

import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ICategories} from '../../models/index';

interface Props {
  route: any;
}

export const Categories = ({route}: Props) => {
  const [categories, setcategories] = useState<ICategories[]>([]);
  const navigation = useNavigation();

  const id: number = route.params.id;
  console.log(id);

  const getCategories = useCallback(async () => {
    const categorieList = await (
      await fetch('http://localhost:3000/categories')
    ).json();

    const title: string = categorieList[0].title;
    navigation.setOptions({title});

    setcategories(categorieList);
  }, [navigation]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  if (categories.length === 0) {
    return null;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {categories[0].list.map((item, index) => (
        <TouchableOpacity
          activeOpacity={1}
          style={styles.categorieItem}
          key={index}
          onPress={() => navigation.navigate('Products', {title: item})}>
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  categorieItem: {
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DEDEDE',
  },
  text: {
    width: '100%',
    textAlign: 'center',
    fontSize: 30,
  },
});
