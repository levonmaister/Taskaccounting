
import { PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Task} from './reducerTypes'


const initialState: Task[] = [] 

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        appendTasks(state, action: PayloadAction<Task>){
            state.push(action.payload)
            return state;
        },
        loadTasks(state, action: PayloadAction<Task[]>){
            state = action.payload;
            return state;
        },
        deleteTaskT(state, action:PayloadAction<string>){
            const id = action.payload;
            const Newstate = state.filter(task => task.id!==id);
            console.log('new task state: ' , Newstate)
            return Newstate;
        }
    }
})





export const {appendTasks, loadTasks, deleteTaskT} = taskSlice.actions;
export default taskSlice.reducer;
  


