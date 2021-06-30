import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

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
    <View style={styles.container}>
      <ProductList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
