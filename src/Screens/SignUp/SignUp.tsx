import React from 'react';
import {Alert, Text, View} from 'react-native';
import {styles} from './styles';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import {theme} from '../../Styles/theme';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../../Navigation/Constants/screens';
import {useForm} from 'react-hook-form';
import {emailRegExp, passwordRegExp} from '../../Utils/helpers';
import {useSignUpMutation} from '../../Api/Authentication';
import {useDispatch} from '../../Utils/Hooks';
import {setCredentials} from '../../Store/AuthSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');
  const [signUp] = useSignUpMutation();
  const onSubmit = async () => {
    try {
      if (control._formValues.password !== control._formValues.passwordRepeat) {
        Alert.alert('Passwords don`t match');
        return;
      }
      const newUserData = await signUp({
        email: control._formValues.email,
        password: control._formValues.password,
      });
      dispatch(setCredentials({...newUserData}));
      navigation.navigate(SCREEN.SIGN_IN);
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>
      <CustomInput
        placeholder={'Email'}
        name={'email'}
        control={control}
        rules={{pattern: {value: emailRegExp, message: 'Email is not valid'}}}
      />
      <CustomInput
        placeholder={'Password'}
        name={'password'}
        control={control}
        secureTextEntry={true}
        rules={{
          required: 'Password is require',
          minLength: {
            value: 5,
            message: 'Password should be minimum 5 characters long',
          },
          pattern: {value: passwordRegExp, message: 'Password is not valid'},
        }}
      />
      <CustomInput
        placeholder={'PasswordRepeat'}
        name={'passwordRepeat'}
        secureTextEntry={true}
        control={control}
        rules={{
          validation: (value: string) =>
            value === pwd || 'Password is not match',
        }}
      />
      <CustomButton title={'Registration'} onPress={handleSubmit(onSubmit)} />
      <CustomButton
        title={'Sign In'}
        onPress={() => navigation.navigate(SCREEN.SIGN_IN)}
        type="SECONDARY"
      />
    </View>
  );
};
export default SignUp;
