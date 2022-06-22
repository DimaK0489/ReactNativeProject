import React from 'react';
import {Text, View} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {STACK, stacks} from '../../Navigation/Constants/stacks';
import {SCREEN} from '../../Navigation/Constants/screens';
import {useForm} from 'react-hook-form';

const ConfirmEmail = () => {
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    navigation.navigate(stacks[STACK.HOME]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm your email</Text>
      <CustomInput
        rules={{required: 'Confirmation code is require'}}
        control={control}
        placeholder={'Enter your confirmation code'}
        name={'code'}
      />
      <CustomButton title={'Confirm'} onPress={handleSubmit(onSubmit)} />
      <CustomButton
        title={'Back to Sign in'}
        onPress={() => navigation.navigate(SCREEN.SIGN_IN)}
        type={'SECONDARY'}
      />
    </View>
  );
};
export default ConfirmEmail;
