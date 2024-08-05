import {useSelector} from 'react-redux'
import { RootState } from '../../../reducers/store';
import { useParams } from 'react-router-dom';

const Goal = () => {

    const goals = useSelector((state: RootState ) => state.goals);
    const goal_name = useParams().name
    const goal = goals.filter(goal=> goal.name === goal_name);

    return(
        <div>
            <h2>{goal[0].name}</h2>
            <h4>{goal[0].description}</h4>
            {goal[0].Tags.map(tag=><p>{tag}</p>)}
            <br></br>
            

            <div>
                {goal[0].Tasks.map(task => <li>{task.date}, {task.name}: {task.time}h  tags: {task.Tags.map(tag=><p>{tag}</p>)}</li>)}
            </div>

        </div>
    )
}

export default Goal;
