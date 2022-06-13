import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import {styles} from './styles';

const SignUp = () => {
  const [code, setCode] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm your email</Text>
      <CustomInput
        placeholder={'Enter your confirmation code'}
        value={code}
        setValue={setCode}
      />
      <CustomButton title={'Confirm'} onPress={() => alert('Confirm')} />
      <CustomButton
        title={'Back to Sign in'}
        onPress={() => alert('Back to Sign in')}
        type={'TERTIARY'}
      />
    </View>
  );
};
export default SignUp;
