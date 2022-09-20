import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {SCREEN} from '../../Navigation/Constants/screens';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate(SCREEN.PACKS)}>
        Go to Packs
      </Button>
    </View>
  );
};
export default Home;
