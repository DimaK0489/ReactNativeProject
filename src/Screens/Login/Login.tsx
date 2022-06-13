import * as React from 'react';
import {View, Image, useWindowDimensions} from 'react-native';
import Logo from '../../Assets/Images/Logo.jpg';
import styles from './styles';
import CustomInput from '../../Components/CustomInput';
import {useState} from 'react';
import CustomButton from '../../Components/CustomButton';
import {theme} from '../../Styles/theme';

const Login = () => {
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
        setValue={() => setUserName}
      />
      <CustomInput
        placeholder={'Password'}
        value={password}
        setValue={() => setPassword}
        secureTextEntry={true}
      />
      <CustomButton title={'Submit'} onPress={() => alert('successful')} />
      <CustomButton
        title={'Forgot password'}
        onPress={() => alert('Forgot password')}
        type="TERTIARY"
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
export default Login;
