import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserRegister } from '../interfaces/interfaces';

interface userLogin {
  dni: string;
  password: string;
  userRol: 'student' | 'teacher';
}

interface UserState {
  loggedIn: boolean;
  user: userLogin | null;
}

const initialState: UserState = {
  loggedIn: true,
  user: null,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<userLogin>) => {
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
