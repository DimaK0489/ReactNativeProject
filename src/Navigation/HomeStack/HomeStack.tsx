import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {theme} from '../../Styles/theme';
import {Button} from 'react-native-paper';
import {useDispatch} from '../../Utils/Hooks';
import {logout} from '../../Store/AuthSlice';
import {SCREEN, screens} from '../Constants/screens';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREEN.HOME}
        component={screens[SCREEN.HOME]}
        options={() => ({
          headerTitle: 'Profile',
          headerRight: () => (
            <Button
              color={theme.colors.primary}
              onPress={() => dispatch(logout())}>
              Выйти
            </Button>
          ),
        })}
      />
      <Stack.Screen
        name={SCREEN.PACKS}
        component={screens[SCREEN.PACKS]}
        options={() => ({
          headerTitle: 'Packs',
          headerRight: () => (
            <Button
              color={theme.colors.green}
              onPress={() => dispatch(logout())}>
              Выйти
            </Button>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
