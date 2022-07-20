import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '../Store';
import {logout, setCredentials} from '../Store/AuthSlice';

export const baseURL = process.env.REACT_APP_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  credentials: 'include',
  prepareHeaders: (headers, {getState}) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error && result?.error?.status === 403) {
    console.log('sending refresh token');
    const refreshResult = await baseQuery('/refreshToken', api, extraOptions);
    if (refreshResult.data) {
      const access_token = (api.getState() as RootState).auth.token;
      api.dispatch(
        setCredentials({token: refreshResult.data as string, access_token}),
      );
      //api.dispatch(setCredentials({...refreshResult.data as string, user}));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};
export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
