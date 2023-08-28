import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    students: studentsReducer,
    teachers: teachersReducer,
  },
});
