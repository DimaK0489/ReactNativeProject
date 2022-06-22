import * as React from 'react';
import {View, Image, useWindowDimensions} from 'react-native';
import Logo from '../../Assets/Images/Logo.jpg';
import styles from './styles';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import {theme} from '../../Styles/theme';
import {useNavigation} from '@react-navigation/native';
import {STACK, stacks} from '../../Navigation/Constants/stacks';
import {SCREEN} from '../../Navigation/Constants/screens';
import {useForm} from 'react-hook-form';

const Login = () => {
  const navigation = useNavigation();
  const {height} = useWindowDimensions();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    navigation.navigate(stacks[STACK.HOME]);
  };
  return (
    <View style={styles.container}>
      <Image
        style={[styles.logo, {height: height * 0.3}]}
        source={Logo}
        resizeMode={'contain'}
      />
      <CustomInput
        name={'Username'}
        control={control}
        placeholder={'UserName'}
        rules={{require: 'Username is require'}}
      />
      <CustomInput
        name={'Password'}
        control={control}
        placeholder={'Password'}
        secureTextEntry
        rules={{
          require: 'Password is require',
          minLength: {
            value: 5,
            message: 'Password should be minimum 5 characters long',
          },
        }}
      />
      <CustomButton title={'Sign In'} onPress={handleSubmit(onSubmit)} />
      <CustomButton
        title={'Forgot password'}
        onPress={() => navigation.navigate(SCREEN.FORGOT_PASSWORD)}
        type="SECONDARY"
      />
      <CustomButton
        title={'Sign Up'}
        onPress={() => navigation.navigate(SCREEN.SIGN_UP)}
        bgColor={theme.colors.bgColor}
        fgColor={theme.colors.fgColor}
      />
      <CustomButton
        title={'Don`t have an account? Create one.'}
        onPress={() => navigation.navigate(SCREEN.SIGN_UP)}
        type="TERTIARY"
      />
    </View>
  );
};
export default Login;
