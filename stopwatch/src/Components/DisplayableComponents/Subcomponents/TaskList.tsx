
import {useDispatch, useSelector} from 'react-redux'
import { AppDispatch, RootState } from '../../../reducers/store';
import { DeletionId, Task } from '../../../reducers/reducerTypes';
import {  DELETE_TASK } from '../../../services/queries';
import { useMutation } from '@apollo/client';
import { deleteTask } from '../../../reducers/goalReducer';
import { deleteTaskT } from '../../../reducers/taskReducer';

const TaskList = () => {
   




    const dispatch = useDispatch<AppDispatch>();

    const [deleteTaskMutation] = useMutation(DELETE_TASK); 
    

    const tasks = useSelector((state: RootState ) => state.tasks);


  

    const deletionhandler = async (event: React.SyntheticEvent, task: Task) => {
        event.preventDefault();

        const ID: DeletionId = {
            goalId: task.Goal,
            taskId: task.id
        };
        
        const deletionPromise = await deleteTaskMutation({ variables: { input: ID.taskId} });

        console.log('DELETION PROMISE: ', deletionPromise)

        if(deletionPromise.data.deleteTask){
            console.log('SUCCESFUL BACKEND DELETE')
            dispatch(deleteTaskT(ID.taskId))
            dispatch(deleteTask(ID));
          }

    }

    return(
        <div>
          <table>
                <thead>

                    <tr>

                        <td>Date</td>
                        <td>Title</td>
                        <td>Time</td>
                        <td>Delete</td>
                        <td>Edit</td>
                    </tr>

                </thead>

                <tbody>

                    {tasks.map((task)=>{
                        return(

                            <tr key={task.name}>

                                <td>{task.date}</td>
                                <td>{task.name}</td>
                                <td>{task.time}</td>
                                <td><button onClick={(e) => {deletionhandler(e, task)}}>Delete</button></td>
                                <td>EDIT</td>

                            </tr>

                        )
                    })}

                </tbody>
                
            </table>

        </div>

       
    )
}


export default TaskList