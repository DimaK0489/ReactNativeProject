import React from 'react';
import {Text, View} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {STACK, stacks} from '../../Navigation/Constants/stacks';
import {SCREEN} from '../../Navigation/Constants/screens';
import {useForm} from 'react-hook-form';

const ResetPassword = () => {
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    navigation.navigate(stacks[STACK.HOME]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset your password</Text>
      <CustomInput
        control={control}
        placeholder={'Code'}
        name={'code'}
        rules={{required: 'Code is require'}}
      />
      <CustomInput
        placeholder={'New your password'}
        name={'newPassword'}
        control={control}
        secureTextEntry
        rules={{
          required: 'New password is require',
          minLength: {
            value: 5,
            message: 'New password should be minimum 5 characters long',
          },
        }}
      />
      <CustomButton title={'Submit'} onPress={handleSubmit(onSubmit)} />
      <CustomButton
        title={'Back to Sign in'}
        onPress={() => navigation.navigate(SCREEN.SIGN_IN)}
        type={'SECONDARY'}
      />
    </View>
  );
};
export default ResetPassword;
