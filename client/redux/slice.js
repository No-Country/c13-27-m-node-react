import { createSlice } from '@reduxjs/toolkit';
import { UserRegister } from '../interfaces/interfaces';

export const teachersSlice = createSlice({
  name: teachers,
  initialState: {
    userRol: 'teacher',
    firstname: '',
    lastname: '',
    dni: '',
    email: '',
    isLoged: false,
  },
  reducers: {
    createTeacher: {},
    addExam: {},
  },
});

export const studentSlice = createSlice({
  name: studentSlice,
  initialState: {
    userRol: 'student',
    firstname: '',
    lastname: '',
    dni: '',
    email: '',
    isLoged: false,
  },
  reducers: {
    createStudent: {},
  },
});
