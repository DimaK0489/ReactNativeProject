import ConfirmEmail from '../../Screens/ConfirmEmail';
import ResetPassword from '../../Screens/ResetPassword';
import ForgotPassword from '../../Screens/ForgotPassword';
import Login from '../../Screens/Login';
import SignUp from '../../Screens/SignUp';

export enum SCREEN {
  SIGN_IN = 'SignIn',
  SIGN_UP = 'SignUp',
  FORGOT_PASSWORD = 'ForgotPassword',
  CONFIRM_EMAIL = 'ConfirmEmail',
  RESET_PASSWORD = 'ResetPassword',
}

export const screens = {
  [SCREEN.FORGOT_PASSWORD]: ForgotPassword,
  [SCREEN.SIGN_IN]: Login,
  [SCREEN.SIGN_UP]: SignUp,
  [SCREEN.CONFIRM_EMAIL]: ConfirmEmail,
  [SCREEN.RESET_PASSWORD]: ResetPassword,
};
