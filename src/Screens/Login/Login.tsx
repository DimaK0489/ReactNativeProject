import * as React from 'react';
import {useState} from 'react';
import {Alert, Image, useWindowDimensions, View} from 'react-native';
import Logo from '../../Assets/Images/Logo.jpg';
import styles from './styles';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import {theme} from '../../Styles/theme';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../../Navigation/Constants/screens';
import {useForm} from 'react-hook-form';
import {Checkbox} from 'react-native-paper';
import {useDispatch} from '../../Utils/Hooks';
import {useLoginMutation} from '../../Api/Authentication';
import {updateAccessToken} from '../../Store/AuthSlice';
import {STACK, stacks} from '../../Navigation/Constants/stacks';

const Login = () => {
  const navigation = useNavigation();
  const {height} = useWindowDimensions();
  const dispatch = useDispatch();
  const [login, {isLoading}] = useLoginMutation();
  const [rememberMe, setRememberMe] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = async () => {
    try {
      console.log(control._formValues);
      const userData = await login(control._formValues && rememberMe).unwrap();
      console.log(userData);
      dispatch(updateAccessToken({...userData}));
      navigation.navigate(stacks[STACK.HOME]);
    } catch (err) {
      Alert.alert('Не удалось войти', 'Неправильное имя или пароль');
      console.log('error', err);
    }
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
      <Checkbox
        status={rememberMe ? 'checked' : 'unchecked'}
        onPress={() => {
          setRememberMe(!rememberMe);
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
