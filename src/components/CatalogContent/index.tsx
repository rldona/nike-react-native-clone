import React, {useContext} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';

import {H1} from '../../components/H1';
import {ProductMenu} from '../../components/ProductMenu';
import {GenreSelector} from '../../components/GenreSelector';
import {HorizontalScroll} from '../../components/HorizontalScroll';
import {Divider} from '../../components/Divider';
import {Context} from '../../context/options';
import {Loading} from '../Loading';

let heightScreen = Dimensions.get('window').height;

export const CatalogContent = () => {
  const {store}: any = useContext(Context);

  // 1. useEffect()
  // 2. getProducts() => axios.get()
  // 3. save data on store => products

  // const products = store.products;

  const loading = () => {
    return (
      <View style={{...styles.loading, height: heightScreen - 220}}>
        <Loading />
      </View>
    );
  };

  const content = () => {
    return (
      <View>
        <GenreSelector />
        <Divider />
        <HorizontalScroll
          title="Imprescindibles, superventas y más"
          // data={products}
        />
        <ProductMenu />
        <Divider />
        <HorizontalScroll
          title="Ultimos y próximos lanzamientos"
          // data={products}
        />
        <Divider />
        <HorizontalScroll
          title="Colecciones de la selecciones"
          // data={products}
        />
      </View>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <H1>Tienda</H1>
      <View style={styles.container}>
        {store.isLoadingShow ? loading() : content()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
});
