import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';

import {Button} from '../Button';
import {Divider} from '../Divider';
import {ProfileMenu} from '../ProfileMenu';

export const ProfileContent = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://avatars.githubusercontent.com/u/1206870?v=4',
        }}
      />

      <Divider padding={10} />

      <Text style={styles.name}>Raúl López Doña</Text>
      <Text style={styles.city}>San Sebastián de los Reyes</Text>

      <Divider padding={20} />

      <View style={styles.editProfileButtonContainer}>
        <Button
          backgroundColor="#FFF"
          textColor="#000"
          borderColor="#CCC"
          borderRadius={3}
          width="50%"
          size="small">
          <Text style={styles.editProfileButton}>Editar perfil</Text>
        </Button>
      </View>

      <Divider padding={20} />

      <ProfileMenu />

      <Divider padding={10} />

      <Divider
        padding={4}
        backgroundColor="#F6F6F6"
        borderColor="#DDD"
        borderWidth={1}
      />

      <Divider padding={10} />

      <View style={styles.memberSince}>
        <Text style={styles.memberSinceText}>Miembro desde junio 2013</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignSelf: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 5,
  },
  city: {
    fontSize: 12,
    fontWeight: '300',
    textAlign: 'center',
  },
  editProfileButton: {
    textTransform: 'uppercase',
    fontSize: 11,
  },
  editProfileButtonContainer: {
    alignItems: 'center',
  },
  memberSince: {
    width: '100%',
    padding: 15,
    backgroundColor: '#F6F6F6',
  },
  memberSinceText: {
    color: '#444',
    fontSize: 11,
    textAlign: 'center',
    fontWeight: '300',
  },
});
