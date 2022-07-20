import React from 'react';
import {Text, View} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../../Navigation/Constants/screens';
import {useForm} from 'react-hook-form';
// import {useDispatch, useSelector} from '../../Utils/Hooks';
// import {selectToken, setCredentials} from '../../Store/AuthSlice';
// import {useChangePasswordMutation} from '../../Api/Authentication';

const ForgotPassword = () => {
  // const dispatch = useDispatch();
  // const token = useSelector(selectToken);
  // const [changePassword] = useChangePasswordMutation();
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();
  const onSubmit = async () => {
    console.log('changePassword');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change your password</Text>
      <CustomInput
        control={control}
        placeholder={'Enter new password'}
        name={'password'}
        rules={{required: 'Password is require'}}
      />
      <CustomButton title={'Send'} onPress={handleSubmit(onSubmit)} />
      <CustomButton
        title={'Back to Sign in'}
        onPress={() => navigation.navigate(SCREEN.SIGN_IN)}
        type={'SECONDARY'}
      />
    </View>
  );
};
export default ForgotPassword;
