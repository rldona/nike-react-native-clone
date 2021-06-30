import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  size?: string;
  textSize?: number;
  color?: string;
  backgroundColor?: string;
  children: string;
  onPress?: any;
}

enum ButtonSizes {
  'small' = 10,
  'medium' = 16,
  'large' = 18,
}

enum TextSizes {
  'small' = 14,
  'medium' = 16,
  'large' = 18,
}

export const Button = ({
  size = 'large',
  color = '#FFF',
  backgroundColor = '#000',
  children,
  onPress,
}: Props) => {
  const setButtonStyle = () => {
    return {
      ...styles.button,
      padding: ButtonSizes[size as keyof typeof ButtonSizes],
      width: '100%',
      backgroundColor,
    };
  };

  const setTextButtonStyle = () => {
    return {
      ...styles.textButton,
      color,
      fontSize: TextSizes[size as keyof typeof TextSizes],
    };
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={setButtonStyle()}
      onPress={onPress}>
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
