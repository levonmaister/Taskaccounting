
import {useSelector} from 'react-redux'
import { RootState } from '../../../reducers/store';


const TaskList = () => {
   

    const tasks = useSelector((state: RootState ) => state.tasks);


    return(
        <div>
           {tasks.map(task=><li>{task.date}    {task.name}: {task.time}h</li>)}
        </div>
    )
}


export default TaskList