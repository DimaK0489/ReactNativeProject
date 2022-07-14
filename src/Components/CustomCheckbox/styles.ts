import {StyleSheet} from 'react-native';
import {theme} from '../../Styles/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: theme.colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  checkbox: {},
});

export default styles;
