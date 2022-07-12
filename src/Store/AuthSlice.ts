import {createSlice, PayloadAction, SerializedError} from '@reduxjs/toolkit';
import {RootState} from './Store';

export enum AuthStates {
  IDLE = 'idle',
  LOADING = 'loading',
}

interface AuthSliceState {
  accessToken: string;
  loading: AuthStates;
  error?: SerializedError | null;
}

const initialState = {
  accessToken: '',
  loading: AuthStates.IDLE,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    updateAccessToken(
      state: AuthSliceState,
      action: PayloadAction<{token: string}>,
    ) {
      state.accessToken = action.payload.token;
    },
    logout: () => initialState,
  },
});

export const selectToken = (state: RootState) => state.auth.accessToken;

export const {updateAccessToken, logout} = authSlice.actions;
