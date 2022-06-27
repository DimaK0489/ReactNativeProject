import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConfirmEmail from '../../Screens/ConfirmEmail';
import ForgotPassword from '../../Screens/ForgotPassword';
import ResetPassword from '../../Screens/ResetPassword';
import SignUp from '../../Screens/SignUp';
import Login from '../../Screens/Login';
import {SCREEN} from '../Constants/screens';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SCREEN.SIGN_IN}>
      <Stack.Screen
        name={SCREEN.SIGN_IN}
        component={Login}
        options={{
          title: 'Mobile APP',
        }}
      />
      <Stack.Screen
        name={SCREEN.SIGN_UP}
        component={SignUp}
        options={{
          title: 'Sign Up Screen',
        }}
      />
      <Stack.Screen
        name={SCREEN.CONFIRM_EMAIL}
        component={ConfirmEmail}
        options={{
          title: 'Confirm Email Screen',
        }}
      />
      <Stack.Screen
        name={SCREEN.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={{
          title: 'Forgot Password Screen',
        }}
      />
      <Stack.Screen
        name={SCREEN.RESET_PASSWORD}
        component={ResetPassword}
        options={{
          title: 'Reset Password Screen',
        }}
      />
    </Stack.Navigator>
  );
};
