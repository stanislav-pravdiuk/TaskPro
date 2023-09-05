import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, updateUserProfile, updateUserTheme, needHelp } from './authOperations';

const initialState = {
  user: { name: null, email: null, avatar: null, theme: "light" },
  token: null,
  isLoggedIn: false,
  isRefreshing: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [logIn.fulfilled](state, action) {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.avatar = action.payload.avatar;
      state.user.theme = action.payload.theme;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [updateUserProfile.fulfilled](state, action) {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.avatar = action.payload.avatar;
      state.user.theme = action.payload.theme;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [updateUserTheme.fulfilled](state, action) {
      state.user.theme = action.payload.theme;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [needHelp.fulfilled](state, action) {
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;