import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  padding: number;
}

export const Divider = ({padding}: Props) => {
  return (
    <View
      style={{...styles.container, paddingTop: padding, paddingBottom: padding}}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});
