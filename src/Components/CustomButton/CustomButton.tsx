import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './styles';

interface Props {
  title: string;
  onPress: () => void;
  type?: string;
  bgColor?: string;
  fgColor?: string;
}

const CustomButton = ({
  title,
  onPress,
  type = 'PRIMARY',
  bgColor,
  fgColor,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};
export default CustomButton;
