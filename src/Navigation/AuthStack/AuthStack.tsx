import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConfirmEmail from '../../Screens/ConfirmEmail';
import ForgotPassword from '../../Screens/ForgotPassword';
import ResetPassword from '../../Screens/ResetPassword';
import SignUp from '../../Screens/SignUp';
import Login from '../../Screens/Login';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={'SignIn'}
        component={Login}
        options={{
          title: 'Mobile APP',
        }}
      />
      <Stack.Screen
        name={'SignUp'}
        component={SignUp}
        options={{
          title: 'Sign Up Screen',
        }}
      />
      <Stack.Screen
        name={'ConfirmEmail'}
        component={ConfirmEmail}
        options={{
          title: 'Confirm Email Screen',
        }}
      />
      <Stack.Screen
        name={'ForgotPassword'}
        component={ForgotPassword}
        options={{
          title: 'Forgot Password Screen',
        }}
      />
      <Stack.Screen
        name={'ResetPassword'}
        component={ResetPassword}
        options={{
          title: 'Reset Password Screen',
        }}
      />
    </Stack.Navigator>
  );
}
