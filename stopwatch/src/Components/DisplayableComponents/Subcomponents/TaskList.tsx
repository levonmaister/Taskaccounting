
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../../../reducers/store';
import { ALL_TASKS } from '../../../services/queries';
import { useQuery } from '@apollo/client';
import { Task } from '../../../reducers/reducerTypes';
import { loadTasks } from '../../../reducers/taskReducer';


const TaskList = () => {
   
    const dispatch = useDispatch();

    const tasks = useSelector((state: RootState ) => state.tasks);

    const TaskQuery =  useQuery(ALL_TASKS);

    if(TaskQuery.loading){ 
        console.log('LOADING')
        return <div>Loading</div>
    }



    const TaskList: Task[] = TaskQuery.data.getTasks;

    //LOAD ALL EXISTING GOALS

   

    dispatch(loadTasks(TaskList));

    
    console.log('tasks:' , tasks)

    return(
        <div>
           {tasks.map(task=><li key={task.name}>{task.date}    {task.name}: {task.time}h</li>)}
        </div>
    )
}


export default TaskList