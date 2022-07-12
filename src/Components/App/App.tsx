import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GlobalStack} from '../../Navigation/GlobalStack/GlobalStack';
import {Provider as PaperProvider} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {theme} from '../../Styles/theme';
import {Provider} from 'react-redux';
import {store} from '../../Store';

function App() {
  return (
    <SafeAreaProvider style={styles.root}>
      <PaperProvider>
        <Provider store={store}>
          <GlobalStack />
        </Provider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColorDefault,
  },
});
export default App;
