import React, {useContext} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';

import {H1} from '../../components/H1';
import {ProductMenu} from '../../components/ProductMenu';
import {HorizontalScroll} from '../../components/HorizontalScroll';
import {Divider} from '../../components/Divider';
import {Context} from '../../context/options';
import {Loading} from '../Loading';

import {FilterSelector} from '../FilterSelector';

let heightScreen = Dimensions.get('window').height;

export const CatalogContent = () => {
  const {
    store: {isLoadingShow},
  }: any = useContext(Context);

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
        <FilterSelector filter="genres" />
        <Divider padding={10} />
        <HorizontalScroll
          title="Imprescindibles, superventas y más"
          // data={products}
        />
        <ProductMenu />
        <Divider padding={10} />
        <HorizontalScroll
          title="Ultimos y próximos lanzamientos"
          // data={products}
        />
        <Divider padding={10} />
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
        {isLoadingShow ? loading() : content()}
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
