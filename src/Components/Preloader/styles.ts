import {StyleSheet} from 'react-native';
import {theme} from '../../Styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  preloader: {},
});

export default styles;
