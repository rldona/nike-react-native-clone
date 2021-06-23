import React from 'react';
import {StyleSheet, View} from 'react-native';

import {H1} from './src/components/H1';
import {ProductMenu} from './src/components/ProductMenu';

const App = () => {
  return (
    <View style={styles.container}>
      <H1>Tienda</H1>
      <ProductMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
