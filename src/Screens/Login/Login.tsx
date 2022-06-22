import * as React from 'react';
import {View, Image, useWindowDimensions, Text} from 'react-native';
import Logo from '../../Assets/Images/Logo.jpg';
import styles from './styles';
import CustomInput from '../../Components/CustomInput';
import {useState} from 'react';
import CustomButton from '../../Components/CustomButton';
import {theme} from '../../Styles/theme';
import {useNavigation} from '@react-navigation/native';
import {STACK, stacks} from '../../Navigation/Constants/stacks';
import {SCREEN} from '../../Navigation/Constants/screens';

const Login = () => {
  const navigation = useNavigation();
  const {height} = useWindowDimensions();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image
        style={[styles.logo, {height: height * 0.3}]}
        source={Logo}
        resizeMode={'contain'}
      />
      <CustomInput
        placeholder={'Username'}
        value={userName}
        setValue={setUserName}
      />
      <CustomInput
        placeholder={'Password'}
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton
        title={'Sign In'}
        onPress={() => navigation.navigate(stacks[STACK.HOME])}
      />
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
