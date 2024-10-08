import { PayloadAction, createSlice} from '@reduxjs/toolkit';
import {DeletionId, Goal, Task,} from './reducerTypes'
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
            return state;
        },
        appendTask(state, action: PayloadAction<Task>){

            state = state.map(goal =>{if(goal._id===action.payload.Goal){
                  goal.tasks.push(action.payload);
                  console.log(goal)
                  return goal;
          }
        return goal
        });
         
        },
        deleteTask(state, action: PayloadAction<DeletionId>){

          const { goalId, taskId } = action.payload;

      // Modify the draft state directly
      const goalcopy = state.find(goal => goal._id === goalId);
      if (goalcopy) {
        goalcopy.tasks = goalcopy.tasks.filter(task => task.id !== taskId);
      }

      state = state.map((goal) => {if(goal._id==goalcopy?._id){return goalcopy}
      return goal
    })
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


  
export const {appendGoal, appendTask, loadGoals,deleteTask} = goalSlice.actions
export default goalSlice.reducer;
