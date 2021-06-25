import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  children: string;
}

export const Button = ({children}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button}>
      <Text style={styles.textButton}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    padding: 18,
    borderRadius: 50,
  },
  textButton: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
