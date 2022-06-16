import React, {useState} from 'react';
import {styles} from '../ConfirmEmail/styles';
import {Text, View} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset your password</Text>
      <CustomInput
        placeholder={'Enter your email'}
        value={email}
        setValue={setEmail}
      />
      <CustomButton title={'Send'} onPress={() => alert('Send email')} />
      <CustomButton
        title={'Back to Sign in'}
        onPress={() => alert('Back to Sign in')}
        type={'SECONDARY'}
      />
    </View>
  );
};
export default ForgotPassword;
