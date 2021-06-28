import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Context} from '../../context/options';

export const Product = ({title, backdrop}: any) => {
  const {store}: any = useContext(Context);

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
  title: {
    fontSize: 14,
    width: 180,
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
