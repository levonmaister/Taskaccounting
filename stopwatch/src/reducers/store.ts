import { configureStore } from '@reduxjs/toolkit';
import goalReducer from './goalReducer';
import taskReducer from './taskReducer';



export const store = configureStore({
    reducer: {
    goals: goalReducer,
    tasks: taskReducer
    }
  })



  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;