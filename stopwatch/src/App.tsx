
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import Tasks from "./Components/DisplayableComponents/Components/Tasks";
import Goals from "./Components/DisplayableComponents/Components/Goals";
import GoalComponent from "./Components/DisplayableComponents/Subcomponents/Goal";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Goal, Task } from './reducers/reducerTypes';
import { ALL_GOALS, ALL_TASKS } from './services/queries';
import { useQuery } from '@apollo/client';
import { loadTasks } from './reducers/taskReducer';
import { loadGoals } from './reducers/goalReducer';



function App() {

  const dispatch = useDispatch();
  const GoalsQuery =  useQuery(ALL_GOALS);
  const TaskQuery =  useQuery(ALL_TASKS);
  
  useEffect(()=> {
// LOAD TASKLIST, GOALLIST


    if(!GoalsQuery.loading && !TaskQuery.loading){

      const TaskList: Task[] = TaskQuery.data.getTasks;
      const GoalList: Goal[] = GoalsQuery.data.getGoals;

      console.log(TaskList , GoalList, ' LOADING USEEFFECT');

      dispatch(loadGoals(GoalList));
      dispatch(loadTasks(TaskList));
    }

  },[GoalsQuery, TaskQuery])
  
  

  
  const padding = {
    padding: 5
  }

    return(
      <Router>
      <div>

      <div>
        <Link style={padding} to="/goals">Goals</Link>
        <Link style={padding} to="/tasks">Tasks</Link>
      </div>

      <Routes>
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/goals/:id" element={<GoalComponent />}/>
      </Routes>

      </div>
      </Router>
    )


}

export default App
