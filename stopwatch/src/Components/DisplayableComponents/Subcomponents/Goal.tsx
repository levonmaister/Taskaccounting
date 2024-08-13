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

            {goal[0].Tags.map(tag=><p key={tag}>{tag}</p>)}

            <br></br>
            

            <div>
                {goal[0].tasks.map(task => <li key={task.name}>{task.date}, {task.name}: {task.time}h  
                    
                tags: {task.Tags.map(tag=><p key={tag}>{tag}</p>)}
                
                </li>)}
            </div>

        </div>
    )
}

export default GoalComponent;
