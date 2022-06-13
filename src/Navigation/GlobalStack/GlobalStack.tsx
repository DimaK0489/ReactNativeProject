import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "../AuthStack/AuthStack";
import { HomeStack } from "../HomeStack/HomeStack";

const Stack = createNativeStackNavigator();

export const GlobalStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeStack" screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"AuthStack"} component={AuthStack} />
        <Stack.Screen name={"HomeStack"} component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

