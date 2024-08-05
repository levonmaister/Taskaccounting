
import { PayloadAction, createSlice} from '@reduxjs/toolkit';
import {TaskEntry} from './reducerTypes'
import {Dispatch} from "redux"

const initialState: TaskEntry[] = [] 

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        appendTasks(state, action: PayloadAction<TaskEntry>){
            state.push(action.payload)
        }

    }
})


export const createTask = (newTask: TaskEntry) => {
    return (dispatch: Dispatch) => {
    dispatch( appendTasks(newTask) )
  }
}


export const {appendTasks} = taskSlice.actions;
export default taskSlice.reducer;
  


