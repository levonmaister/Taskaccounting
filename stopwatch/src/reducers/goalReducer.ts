import { PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Goal, Task,} from './reducerTypes'
import {Dispatch} from "redux"



const initialState: Goal[] = []

const goalSlice = createSlice({
    name: 'goals',
    initialState,
    reducers: {

      loadGoals(state, action: PayloadAction<Goal[]>){
        console.log('LOAD GOALS: ')
        state = action.payload;
        return state;
      }
        , 
        appendGoal(state, action: PayloadAction<Goal>){
            state.push(action.payload);
        },
        appendTask(state, action: PayloadAction<Task>){

            state = state.map(goal =>{if(goal._id===action.payload.Goal){
                  goal.tasks.push(action.payload);
                  console.log(goal)
                  return goal;
          }
        return goal
        });
         
        }

    }
})



export const createGoal = (newGoal: Goal) => {
      return  (dispatch: Dispatch) => {
      dispatch( appendGoal(newGoal) )
    }
  }
  

export const addGoals = (goals: Goal[]) => {
  return  (dispatch: Dispatch) =>{
    dispatch(loadGoals(goals));
  }
}

export const addTask = (newTask: Task) => {
  return  (dispatch: Dispatch) =>{
    dispatch(appendTask(newTask));
  }
}


  
export const {appendGoal, appendTask, loadGoals} = goalSlice.actions
export default goalSlice.reducer;
