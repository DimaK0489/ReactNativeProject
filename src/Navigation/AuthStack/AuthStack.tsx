import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../../Screens/Login/Login";

const Stack = createNativeStackNavigator();

export default function AuthStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Login'}
        component={Login}
        options={{
          title: 'Mobile APP',
        }}
      />
      <Stack.Screen
        name={'Sign Up'}
        component={Login}
        options={{
          title: 'Sign Up Page',
        }}
      />
      <Stack.Screen
        name={'Forgot Password'}
        component={Login}
        options={{
          title: 'Forgot Password Page',
        }}
      />
    </Stack.Navigator>
  );
}

