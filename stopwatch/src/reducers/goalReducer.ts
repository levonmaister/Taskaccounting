import { PayloadAction, createSlice} from '@reduxjs/toolkit';
import {GoalEntry, TaskEntry, Tasktogoal} from './reducerTypes'
import {Dispatch} from "redux"

const initialState: GoalEntry[] = []

const goalSlice = createSlice({
    name: 'goals',
    initialState,
    reducers: {
        appendGoal(state, action: PayloadAction<GoalEntry>){
            state.push(action.payload);
        },
        appendTask(state, action: PayloadAction<Tasktogoal>){

            state = state.map(goal =>{if(goal.name===action.payload.Goalname){
                  goal.Tasks.push(action.payload.NewTask);
                  console.log(goal)
                  return goal;
          }
        return goal
        });
         
        }

    }
})



export const createGoal = (newGoal: GoalEntry) => {
      return (dispatch: Dispatch) => {
      dispatch( appendGoal(newGoal) )
    }
  }
  

export const addTask = (NewTask: TaskEntry, GoalName: string) => {
  return (dispatch: Dispatch) =>{
    const payload = { Goalname: GoalName, NewTask: NewTask };
    dispatch(appendTask(payload));
  }
}


  
export const {appendGoal, appendTask} = goalSlice.actions
export default goalSlice.reducer;
