import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GlobalStack } from "../../Navigation/GlobalStack/GlobalStack";

function App() {
  return (
    <SafeAreaProvider>
      <GlobalStack />
    </SafeAreaProvider>
  );
}

export default App;
