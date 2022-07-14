import {createSlice} from '@reduxjs/toolkit';
import {RootState} from './Store';

const initialState = {
  token: '',
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setCredentials: (state, action) => {
      const {user, token} = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: () => initialState,
  },
});

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;

export const {setCredentials, logout} = authSlice.actions;
