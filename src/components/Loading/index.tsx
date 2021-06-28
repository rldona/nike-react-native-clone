import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // position: 'absolute',
    // top: 0,
    // right: 0,
    // zIndex: 999,
    // width: '100%',
    // height: '100%',
    // backgroundColor: '#FFF',
  },
});
