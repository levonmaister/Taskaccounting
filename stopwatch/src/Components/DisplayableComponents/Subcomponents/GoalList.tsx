
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../../../reducers/store';
import { Link } from 'react-router-dom';
import { ALL_GOALS } from '../../../services/queries';
import { Goal } from '../../../reducers/reducerTypes';
import { useQuery } from '@apollo/client';
import { loadGoals } from '../../../reducers/goalReducer';


const GoalList = () => {
   
    const dispatch = useDispatch();


    const goals = useSelector((state: RootState ) => state.goals);
    
    const GoalsQuery =  useQuery(ALL_GOALS);


      
    if(GoalsQuery.loading){ 
        console.log('LOADING')
        return <div>Loading</div>
    }



    const GoalList: Goal[] = GoalsQuery.data.getGoals;

    //LOAD ALL EXISTING GOALS

   

    dispatch(loadGoals(GoalList));

    
    console.log('goals:' , goals)

    return(
        <div>
           {goals.map(goal=><li key={goal.name}><Link to={`/goals/${goal._id}`}>{goal.name}: {goal.description}</Link></li>)}
        </div>
    )
}


export default GoalList