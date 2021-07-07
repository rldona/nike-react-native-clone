import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export const ProfileMenu = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1}>
        <EvilIcons name="archive" size={27} color="#000" style={styles.icon} />
        <Text style={styles.name}>Pedidos</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={1}>
        <EvilIcons
          name="credit-card"
          size={27}
          color="#000"
          style={styles.icon}
        />
        <Text style={styles.name}>Pase</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={1}>
        <EvilIcons name="calendar" size={27} color="#000" style={styles.icon} />
        <Text style={styles.name}>Eventos</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={1}>
        <EvilIcons name="gear" size={27} color="#000" style={styles.icon} />
        <Text style={styles.name}>Configuración</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  name: {
    color: '#000',
    fontSize: 11,
    textAlign: 'center',
    fontWeight: '400',
  },
  icon: {
    color: '#999',
    alignSelf: 'center',
    marginBottom: 10,
  },
});
