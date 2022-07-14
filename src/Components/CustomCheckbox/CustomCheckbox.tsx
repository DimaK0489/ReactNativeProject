import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {Checkbox} from 'react-native-paper';
import {Text, View} from 'react-native';
import styles from './styles';

interface Props {
  name: string;
  control: Control;
  title: string;
}

const CustomCheckbox = ({name, control, title}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, value}}) => (
          <Checkbox
            onPress={() => onChange(!value)}
            status={value ? 'checked' : 'unchecked'}
          />
        )}
      />
    </View>
  );
};
export default CustomCheckbox;
