
import {useSelector} from 'react-redux'
import { RootState } from '../../../reducers/store';
import { Link } from 'react-router-dom';


const GoalList = () => {
   

    const goals = useSelector((state: RootState ) => state.goals);


    return(
        <div>
           {goals.map(goal=><li key={goal.name}><Link to={`/goals/${goal.name}`}>{goal.name}: {goal.description}</Link></li>)}
        </div>
    )
}


export default GoalList