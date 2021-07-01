import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Modal, StyleSheet, Text, View, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Context} from '../../context/options';

import {H1} from '../../components/H1';
import {Button} from '../../components/Button';
import {FilterSelector} from '../../components/FilterSelector';
import {ProductList} from '../../components/ProductList';

interface Props {
  route: any;
}

export const ProductsScreen = ({route}: Props) => {
  const {
    store: {showProductFilterModal},
    dispatch,
  }: any = useContext(Context);

  const navigation = useNavigation();
  const title: string = route.params.title;

  const navigator = useCallback(async () => {
    navigation.setOptions({title});
  }, [navigation, title]);

  const onPressCloseButton = () => {
    dispatch({type: 'SHOW_PRODUCT_FILTER_MODAL', payload: false});
  };

  useEffect(() => {
    navigator();
  }, [navigator]);

  return (
    <View style={styles.container}>
      <View style={styles.selectorWrapp}>
        <FilterSelector filter="clothing" />
      </View>
      <ProductList />
      <Modal
        animationType="slide"
        visible={showProductFilterModal}
        presentationStyle={'fullScreen'}>
        <View style={styles.container}>
          <View style={styles.buttonClose}>
            <Button size="tiny" onPress={onPressCloseButton}>
              <Ionicons name="close" size={22} color="#FFF" />
            </Button>
          </View>
          <ScrollView style={styles.modalView}>
            <H1>Filtrar</H1>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonView}>
              <Button
                size="small"
                backgroundColor="#FFF"
                color="#000"
                border="#000">
                <Text>Reestablecer(2)</Text>
              </Button>
            </View>
            <View style={styles.buttonView}>
              <Button size="small">
                <Text>Aplicar</Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectorWrapp: {
    height: 60,
    marginBottom: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    paddingTop: 60,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    marginTop: 20,
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  buttonView: {
    width: '49%',
  },
  buttonClose: {
    position: 'absolute',
    top: 60,
    right: 20,
    width: '8%',
    zIndex: 999,
  },
});
