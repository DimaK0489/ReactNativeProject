import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const ConfirmEmail = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm your email</Text>
      <CustomInput
        placeholder={'Enter your confirmation code'}
        value={code}
        setValue={setCode}
      />
      <CustomButton title={'Confirm'} onPress={() => navigation.navigate('HomeStack')} />
      <CustomButton
        title={'Back to Sign in'}
        onPress={() => navigation.navigate('SignIn')}
        type={'SECONDARY'}
      />
    </View>
  );
};
export default ConfirmEmail;
