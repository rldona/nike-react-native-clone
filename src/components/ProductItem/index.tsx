import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const ProductItem = ({title, image}: any) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => console.log('hola')}>
      <View style={styles.container}>
        <Image
          style={styles.backdrop}
          source={{
            uri: image,
          }}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    width: 190,
  },
  backdrop: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
});
