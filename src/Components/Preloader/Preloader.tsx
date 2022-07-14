import React from 'react';
import {Text, View} from 'react-native';
import {theme} from '../../Styles/theme';
import {ActivityIndicator} from 'react-native-paper';
import styles from './styles';

interface Props {
  title?: string;
}

const Preloader = ({title}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ActivityIndicator
        color={theme.colors.green}
        animating={true}
        size={'large'}
      />
    </View>
  );
};
export default Preloader;
