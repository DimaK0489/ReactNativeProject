import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {STACK, stacks} from '../../Navigation/Constants/stacks';
import {SCREEN} from '../../Navigation/Constants/screens';

const ConfirmEmail = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm your email</Text>
      <CustomInput
        placeholder={'Enter your confirmation code'}
        value={code}
        setValue={setCode}
      />
      <CustomButton
        title={'Confirm'}
        onPress={() => navigation.navigate(stacks[STACK.HOME])}
      />
      <CustomButton
        title={'Back to Sign in'}
        onPress={() => navigation.navigate(SCREEN.SIGN_IN)}
        type={'SECONDARY'}
      />
    </View>
  );
};
export default ConfirmEmail;
