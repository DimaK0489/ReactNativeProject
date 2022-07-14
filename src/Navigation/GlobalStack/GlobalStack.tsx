import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStack} from '../HomeStack/HomeStack';
import {AuthStack} from '../AuthStack/AuthStack';
import {useSelector} from '../../Utils/Hooks';
import {selectToken} from '../../Store/AuthSlice';

const Stack = createNativeStackNavigator();

export const GlobalStack = () => {
  //const token = useSelector(selectToken);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={'HomeStack'} component={HomeStack} />
        <Stack.Screen name={'AuthStack'} component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
