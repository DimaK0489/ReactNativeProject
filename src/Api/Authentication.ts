import {apiSlice} from './Api';
import {LoginType, RegistrationDataType} from '../Types';

export const Authentication = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: (data: LoginType) => ({
        url: 'auth/login',
        method: 'POST',
        body: {...data},
      }),
    }),
    signUp: builder.mutation({
      query: (data: RegistrationDataType) => ({
        url: 'auth/register',
        method: 'POST',
        body: {...data},
      }),
    }),
    changePassword: builder.mutation({
      query: data => ({
        url: 'auth/set-new-password',
        method: 'POST',
        body: {...data},
      }),
    }),
  }),
});

export const {useLoginMutation, useSignUpMutation, useChangePasswordMutation} =
  Authentication;
