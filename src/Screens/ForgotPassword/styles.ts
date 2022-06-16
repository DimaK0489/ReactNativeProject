import {StyleSheet} from 'react-native';
import { theme } from "../../Styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.backgroundColorDefault,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 20,
    color: theme.colors.black,
  },
});
