import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../Screens/Login';
import SignUp from '../../Screens/SignUp';
import ConfirmEmail from '../../Screens/ConfirmEmail';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      {/*<Stack.Screen
        name={'Sign In'}
        component={Login}
        options={{
          title: 'Mobile APP',
        }}
      />*/}
      {/*<Stack.Screen
        name={'Sign Up'}
        component={SignUp}
        options={{
          title: 'Sign Up Screen',
        }}
      />*/}
      <Stack.Screen
        name={'Confirm Email'}
        component={ConfirmEmail}
        options={{
          title: 'Confirm Email Screen',
        }}
      />
    </Stack.Navigator>
  );
}
