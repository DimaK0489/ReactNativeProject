import {apiSlice} from './Api';

export const Authentication = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: data => ({
        url: 'auth/login',
        method: 'POST',
        body: {...data},
      }),
    }),
  }),
});

export const {useLoginMutation} = Authentication;
