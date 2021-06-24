import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';

import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  route: any;
}

const initCategory = {
  id: 0,
  title: '',
  type: '',
  list: [],
};

export const Categories = ({route}: Props) => {
  const [categories, setcategories] = useState([initCategory]);
  const navigation = useNavigation();

  const id = route.params.id;

  console.log(id);

  const getCategories = async () => {
    const categorieList = await (
      await fetch('http://localhost:3000/categories')
    ).json();

    setcategories(categorieList);
  };

  useEffect(() => {
    getCategories();
  }, []);

  if (categories.length === 0) {
    return null;
  }

  navigation.setOptions({title: categories[0].title}); // TODO: revisar esta llamada y si es el ciclo normal

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
