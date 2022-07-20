import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {theme} from '../../Styles/theme';
import {Button} from 'react-native-paper';
import Home from '../../Screens/Home';
import {useDispatch} from '../../Utils/Hooks';
import {logout} from '../../Store/AuthSlice';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  const dispatch = useDispatch();
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
              onPress={() => dispatch(logout())}>
              Выйти
            </Button>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
