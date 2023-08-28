import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserRegister } from '../interfaces/interfaces';

interface UserState {
  loggedIn: boolean;
  user: UserRegister | null;
}

const initialState: UserState = {
  loggedIn: false,
  user: null,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<UserRegister>) => {
      state.loggedIn = true;
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.loggedIn = false;
      state.user = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
