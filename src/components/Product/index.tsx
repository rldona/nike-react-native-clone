import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Context} from '../../context/options';

export const Product = ({id, title, preview}: any) => {
  const {store}: any = useContext(Context);

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        navigation.navigate('ProductDetail', {id, title});
      }}>
      <View style={styles.container}>
        <Image
          style={styles.backdrop}
          source={{
            uri: preview,
          }}
        />
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subType}>Partes de arriba</Text>
          <Text style={styles.title}>159.99 €</Text>
        </View>
      </View>
      {store.isFavoriteEdited ? (
        <View style={styles.favoriteIcon}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() =>
              console.log('-- remove favorite from store and axios.delete --')
            }>
            <View>
              <MaterialIcons name="heart" size={20} color="#000" />
            </View>
          </TouchableOpacity>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginBottom: 20,
    width: 190,
  },
  info: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 12,
    width: 180,
    marginBottom: 3,
  },
  subType: {
    fontSize: 12,
    width: 180,
    color: '#666',
    marginBottom: 3,
  },
  backdrop: {
    height: 200,
    width: 190,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#FFF',
    borderRadius: 50,
    padding: 5,
  },
});
