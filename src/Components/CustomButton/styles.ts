import {StyleSheet} from 'react-native';
import {theme} from '../../Styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '60%',
    padding: 15,
    margin: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  container_PRIMARY: {
    backgroundColor: theme.colors.primary,
  },
  container_SECONDARY: {
    borderColor: theme.colors.black,
    borderWidth: 2,
  },
  container_TERTIARY: {},
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: theme.colors.black,
  },
  text_TERTIARY: {
    color: theme.colors.grey,
  },
  text_SECONDARY: {
    color: theme.colors.grey,
  },
});
