import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {Button} from '../../components/Button';

export const SearchScreen = () => {
  const [text, onChangeText] = useState('');

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <EvilIcons name="search" size={30} color="#000" />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Buscar producto"
          autoFocus={true}
        />
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButton}>Cancelar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.modalView}
        contentContainerStyle={styles.searchContent}>
        <Text>Search history list...</Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonView}>
          <Button size="small">
            <Text>Cámara</Text>
          </Button>
        </View>
        <View style={styles.buttonView}>
          <Button size="small">
            <Text>Fotos</Text>
          </Button>
        </View>
      </View>
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
  topContainer: {
    position: 'absolute',
    top: 45,
    left: 0,
    width: '100%',
    marginBottom: 20,
    paddingLeft: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    alignItems: 'center',
    zIndex: 999,
  },
  input: {
    height: 40,
    width: '70%',
    paddingLeft: 20,
  },
  cancelButton: {
    color: '#999',
    marginRight: 20,
  },
  searchContent: {
    paddingTop: 45,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    marginTop: 20,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
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
