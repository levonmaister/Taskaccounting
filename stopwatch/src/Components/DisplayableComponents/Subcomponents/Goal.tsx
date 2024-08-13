import {useSelector} from 'react-redux'
import { RootState } from '../../../reducers/store';
import { useParams } from 'react-router-dom';

const GoalComponent = () => {

    const goals = useSelector((state: RootState ) => state.goals);

    const goal_id = useParams().id

    console.log('goal Id:' , goal_id)
    const goal = goals.filter(goal => goal._id === goal_id);

    console.log(goal)
    
    return(
        <div key={goal[0]._id}>


            <h2>{goal[0].name}</h2>
            <h4>{goal[0].description}</h4>

          
            <br></br>
            

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
                    {goal[0].tasks.map((task)=>{
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

        </div>
    )
}

export default GoalComponent;
