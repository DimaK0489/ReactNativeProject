import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

interface Props {
  value: string;
  setValue: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean | undefined;
}

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
export default CustomInput;
