
import { PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Task} from './reducerTypes'
import {Dispatch} from "redux"

const initialState: Task[] = [] 

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        appendTasks(state, action: PayloadAction<Task>){
            state.push(action.payload)
        },
        loadTasks(state, action: PayloadAction<Task[]>){
            state = action.payload;
            return state;
        }

    }
})


export const createTask = (newTask: Task) => {
    return (dispatch: Dispatch) => {
    dispatch( appendTasks(newTask) )
  }
}


export const {appendTasks, loadTasks} = taskSlice.actions;
export default taskSlice.reducer;
  


