import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  padding: number;
  borderColor?: string;
  borderWidth?: number;
  backgroundColor?: string;
}

export const Split = ({
  padding,
  borderColor = '#FFF',
  borderWidth = 0,
  backgroundColor = '#FFF',
}: Props) => {
  return (
    <View
      style={{
        ...styles.container,
        borderColor,
        borderWidth,
        backgroundColor,
        paddingTop: padding,
        paddingBottom: padding,
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 2,
  },
});
