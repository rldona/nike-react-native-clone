import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

import {ProductList} from '../../components/ProductList';

interface Props {
  route: any;
}

export const ProductsScreen = ({route}: Props) => {
  const navigation = useNavigation();
  const title: string = route.params.title;

  const navigator = useCallback(async () => {
    navigation.setOptions({title});
  }, [navigation, title]);

  useEffect(() => {
    navigator();
  }, [navigator]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>ProductsScreen</Text>
      <ProductList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
  },
});
