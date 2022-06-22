import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import {theme} from '../../Styles/theme';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../../Navigation/Constants/screens';
import {useForm} from 'react-hook-form';
import {emailRegExp, passwordRegExp} from '../../Utils/helpers';

const SignUp = () => {
  const navigation = useNavigation();
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');
  const onSubmit = (data: any) => {
    console.log(data);
    navigation.navigate(SCREEN.CONFIRM_EMAIL);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>
      <CustomInput
        name={'Username'}
        control={control}
        placeholder={'Username'}
        rules={{
          required: 'Username is require',
          minLength: {
            value: 5,
            message: 'Username should be minimum 5 characters long',
          },
          maxLength: {
            value: 25,
            message: 'Username should be minimum 25 characters long',
          },
        }}
      />
      <CustomInput
        placeholder={'Email'}
        name={'Email'}
        control={control}
        rules={{pattern: {value: emailRegExp, message: 'Email is not valid'}}}
      />
      <CustomInput
        placeholder={'Password'}
        name={'Password'}
        control={control}
        secureTextEntry={true}
        rules={{
          required: 'Password is require',
          minLength: {
            value: 5,
            message: 'Password should be minimum 5 characters long',
          },
          pattern: {value: passwordRegExp, message: 'Password is not valid'},
        }}
      />
      <CustomInput
        placeholder={'PasswordRepeat'}
        name={'PasswordRepeat'}
        secureTextEntry={true}
        control={control}
        rules={{
          validation: (value: string) =>
            value === pwd || 'Password is not match',
        }}
      />
      <CustomButton title={'Registration'} onPress={handleSubmit(onSubmit)} />
      <CustomButton
        title={'Sign In'}
        onPress={() => navigation.navigate(SCREEN.SIGN_IN)}
        type="SECONDARY"
      />
      <CustomButton
        title={'Sign in with google'}
        onPress={() => alert('Google')}
        bgColor={theme.colors.bgColor}
        fgColor={theme.colors.fgColor}
      />
    </View>
  );
};
export default SignUp;
