import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const Product = ({title, backdrop}: any) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate('ProductDetail')}>
      <View style={styles.container}>
        <Image
          style={styles.backdrop}
          source={{
            uri: backdrop,
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
