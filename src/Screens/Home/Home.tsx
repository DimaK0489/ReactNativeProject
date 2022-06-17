import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {STACK, stacks} from '../../Navigation/Constants/stacks';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate(stacks[STACK.AUTH])}>
        Go to Authorized
      </Button>
    </View>
  );
};
export default Home;
