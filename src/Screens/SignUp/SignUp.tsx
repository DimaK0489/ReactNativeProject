import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import {theme} from '../../Styles/theme';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>
      <CustomInput
        placeholder={'Username'}
        value={userName}
        setValue={setUserName}
      />
      <CustomInput placeholder={'Email'} value={email} setValue={setEmail} />
      <CustomInput
        placeholder={'Password'}
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomInput
        placeholder={'PasswordRepeat'}
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry={true}
      />
      <CustomButton
        title={'Registration'}
        onPress={() => alert('successful')}
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
