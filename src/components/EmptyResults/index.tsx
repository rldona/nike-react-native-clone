import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {H1} from '../H1';
import {Button} from '../Button';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title: string;
  icon: string;
  message: string;
  buttonTitle: string;
}

export const EmptyResults = ({title, icon, message, buttonTitle}: Props) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Catalog');
  };

  return (
    <View style={styles.container}>
      <H1>{title}</H1>

      <View style={styles.messageContainer}>
        <View style={styles.iconContainer}>
          <EvilIcons name={icon} size={30} color="#000" style={styles.icon} />
        </View>
        <Text style={styles.text}>{message}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={onPress}>
          <Text>{buttonTitle}</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  messageContainer: {
    alignSelf: 'center',
    width: 260,
  },
  iconContainer: {
    borderColor: '#000',
    borderWidth: 1,
    paddingTop: 12,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 12,
    borderRadius: 100,
    marginBottom: 20,
    width: 50,
    alignSelf: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
  text: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '400',
  },
  buttonContainer: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#DEDEDE',
    padding: 16,
  },
});
