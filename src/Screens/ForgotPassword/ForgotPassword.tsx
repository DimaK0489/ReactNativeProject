import React from 'react';
import {Text, View} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../../Navigation/Constants/screens';
import {useForm} from 'react-hook-form';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    navigation.navigate(SCREEN.RESET_PASSWORD);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot your password</Text>
      <CustomInput
        control={control}
        placeholder={'Enter your username'}
        name={'username'}
        rules={{required: 'Username is require'}}
      />
      <CustomButton title={'Send'} onPress={handleSubmit(onSubmit)} />
      <CustomButton
        title={'Back to Sign in'}
        onPress={() => navigation.navigate(SCREEN.SIGN_IN)}
        type={'SECONDARY'}
      />
    </View>
  );
};
export default ForgotPassword;
