import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

export const ShoppingCartPromoCode = () => {
  const [name, setName] = useState('');

  const txtHandler = (enteredName: string) => {
    setName(enteredName);
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>¿Tienes un código promocional?</Text>
          <Text style={styles.plus}>+</Text>
        </View>
        <View style={styles.body}>
          <TextInput
            style={styles.inputCode}
            placeholder="Código promocional"
            value={name}
            onChangeText={txtHandler}
          />
          <Pressable style={styles.buttonCode}>
            <Text style={styles.textButtonCode}>Aplicar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  plus: {
    color: '#000',
    fontSize: 20,
    fontWeight: '400',
  },
  inputCode: {
    height: 40,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 10,
    width: 250,
  },
  buttonCode: {
    backgroundColor: '#000',
    height: 40,
    width: 80,
    justifyContent: 'center',
  },
  textButtonCode: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
