import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Button} from '../Button';

interface Props {
  title: string;
  topic: string;
  src: string;
}

export const Card = ({title, topic, src}: Props) => {
  return (
    <View testID="card-component">
      <ImageBackground
        source={{
          uri: src,
        }}
        style={styles.container}>
        <Text style={styles.h2}>{topic}</Text>
        <Text style={styles.h1}>{title}</Text>
        <View style={styles.buttonContainer}>
          <Button
            size="small"
            textColor="#000"
            borderColor="#FFF"
            backgroundColor="#FFF">
            <Text>Más información</Text>
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
    padding: 20,
    height: 500,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },
  h1: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: '800',
    paddingLeft: 20,
    paddingBottom: 15,
    textTransform: 'uppercase',
  },
  h2: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '400',
    paddingLeft: 20,
    paddingBottom: 15,
  },
  buttonContainer: {
    width: 175,
    paddingLeft: 20,
    marginBottom: 15,
  },
});
