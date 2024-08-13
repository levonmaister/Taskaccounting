
import {useSelector} from 'react-redux'
import { RootState } from '../../../reducers/store';

const TaskList = () => {
   

    const tasks = useSelector((state: RootState ) => state.tasks);


    return(
        <div>
          <table>
                    <thead>
                    <tr>
                        <td>Date</td>
                        <td>Title</td>
                        <td>Time</td>
                    </tr>
                    </thead>
                    <tbody>
                    {tasks.map((task)=>{
                        return(
                            <tr key={task.name}>
                                <td>{task.date}</td>
                                <td>{task.name}</td>
                                <td>{task.time}</td>
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