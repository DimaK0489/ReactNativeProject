import * as React from 'react';
import {Alert, Image, useWindowDimensions, View} from 'react-native';
import Logo from '../../Assets/Images/Logo.jpg';
import styles from './styles';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import {theme} from '../../Styles/theme';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../../Navigation/Constants/screens';
import {useForm} from 'react-hook-form';
import {useDispatch} from '../../Utils/Hooks';
import {useLoginMutation} from '../../Api/Authentication';
import {setCredentials} from '../../Store/AuthSlice';
import CustomCheckbox from '../../Components/CustomCheckbox';
import Preloader from '../../Components/Preloader';

const Login = () => {
  const navigation = useNavigation();
  const {height} = useWindowDimensions();
  const dispatch = useDispatch();
  const [login, {isLoading}] = useLoginMutation();
  const {control, handleSubmit} = useForm();
  const onSubmit = async () => {
    try {
      const userData = await login({
        email: control._formValues.email,
        password: control._formValues.password,
        rememberMe: control._formValues.rememberMe,
      }).unwrap();
      dispatch(setCredentials({...userData}));
      // await AsyncStorage.setItem(
      //   'token',
      //   (userData as {data: {token: string}}).data.token,
      // );
    } catch (err) {
      Alert.alert('Failed to login', 'Wrong username or password');
      console.log('error', err);
    }
  };

  return isLoading ? (
    <Preloader title={'Loading...'} />
  ) : (
    <View style={styles.container}>
      <Image
        style={[styles.logo, {height: height * 0.3}]}
        source={Logo}
        resizeMode={'contain'}
      />
      <CustomInput
        name={'email'}
        control={control}
        placeholder={'Email'}
        rules={{require: 'Username is require'}}
      />
      <CustomInput
        name={'password'}
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
      <CustomCheckbox
        title={'RememberMe'}
        name={'rememberMe'}
        control={control}
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
