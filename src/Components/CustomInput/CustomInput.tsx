import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';
import {Control, Controller} from 'react-hook-form';
import {theme} from '../../Styles/theme';

interface Props {
  name: string;
  control: Control;
  placeholder: string;
  secureTextEntry?: boolean | undefined;
  rules: Object;
}

const CustomInput = ({
  name,
  control,
  placeholder,
  secureTextEntry,
  rules = {},
}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {
                borderColor: error
                  ? theme.colors.error
                  : theme.colors.borderColor,
              },
            ]}>
            <TextInput
              style={styles.input}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
          {error && (
            <Text style={{color: theme.colors.error}}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};
export default CustomInput;
