import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {STACK, stacks} from '../../Navigation/Constants/stacks';
import {SCREEN} from '../../Navigation/Constants/screens';

const ResetPassword = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset your password</Text>
      <CustomInput
        placeholder={'Enter your email'}
        value={code}
        setValue={setCode}
      />
      <CustomInput
        placeholder={'New your password'}
        value={newPassword}
        setValue={setNewPassword}
      />
      <CustomButton
        title={'Submit'}
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
export default ResetPassword;
