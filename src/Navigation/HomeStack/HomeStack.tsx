import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../Screens/Home";
import { theme } from "../../Styles/theme";
import { Button } from "react-native-paper";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={() => ({
          headerTitle: 'Users',
          headerRight: () => (
            <Button
              color={theme.colors.primary}
              onPress={() => alert('Exit')}>
              Выйти
            </Button>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
