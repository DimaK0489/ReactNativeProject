import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot your password</Text>
      <CustomInput
        placeholder={'Enter your email'}
        value={email}
        setValue={setEmail}
      />
      <CustomButton
        title={'Send'}
        onPress={() => navigation.navigate('ResetPassword')}
      />
      <CustomButton
        title={'Back to Sign in'}
        onPress={() => navigation.navigate('SignIn')}
        type={'SECONDARY'}
      />
    </View>
  );
};
export default ForgotPassword;
