import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  size?: string;
  textSize?: number;
  color?: string;
  backgroundColor?: string;
  children: string;
}

enum buttonSizes {
  'small' = 10,
  'medium' = 16,
  'large' = 18,
}

enum textSizes {
  'small' = 14,
  'medium' = 16,
  'large' = 18,
}

export const Button = ({
  size = 'large',
  color = '#FFF',
  backgroundColor = '#000',
  children,
}: Props) => {
  const setButtonStyle = () => {
    return {
      ...styles.button,
      padding: buttonSizes[size],
      width: '100%',
      backgroundColor,
    };
  };

  const setTextButtonStyle = () => {
    return {
      ...styles.textButton,
      color,
      fontSize: textSizes[size],
    };
  };

  return (
    <TouchableOpacity activeOpacity={0.8} style={setButtonStyle()}>
      <Text style={setTextButtonStyle()}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
  },
  textButton: {
    fontWeight: '600',
    textAlign: 'center',
  },
});
