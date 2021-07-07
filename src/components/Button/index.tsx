import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  onPress?: any;
  size?: string;
  width?: string;
  textSize?: number;
  textColor?: string;
  borderColor?: string;
  borderRadius?: number;
  backgroundColor?: string;
  children: JSX.Element;
}

enum ButtonSizes {
  'tiny' = 3,
  'small' = 10,
  'medium' = 16,
  'large' = 18,
}

enum TextSizes {
  'tiny' = 10,
  'small' = 14,
  'medium' = 16,
  'large' = 18,
}

export const Button = ({
  size = 'large',
  textColor = '#FFF',
  borderColor = '#000',
  borderRadius = 50,
  backgroundColor = '#000',
  width = '100%',
  children,
  onPress,
}: Props) => {
  const setButtonStyle = () => {
    return {
      ...styles.button,
      padding: ButtonSizes[size as keyof typeof ButtonSizes],
      borderColor,
      borderRadius,
      backgroundColor,
      width,
    };
  };

  const setTextButtonStyle = () => {
    return {
      ...styles.textButton,
      color: textColor,
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
    borderWidth: 1,
  },
  textButton: {
    fontWeight: '600',
    textAlign: 'center',
  },
});
