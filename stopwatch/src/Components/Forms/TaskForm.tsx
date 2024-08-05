import {createTask} from '../../reducers/taskReducer';
import{addTask} from '../../reducers/goalReducer'
import {useState} from 'react'
import { TaskEntry } from '../../reducers/reducerTypes';
import {useSelector} from 'react-redux'
//import {State} from './reducers/store';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../reducers/store';




const TaskForm = () => {
    const [Date, setDate] = useState('');
    const [name, setName] = useState('');
    const [tags,setTags] = useState<string[]>([]);
    const [tag, setTag] = useState<string>('');
    const [time, setTime] = useState(0);


    const [goal, setGoal] = useState('');

    const dispatch = useDispatch<AppDispatch>();
    const goals = useSelector((state: RootState) => state.goals)



    const addTag = () => {
        setTags(tags.concat(tag))
        setTag('')
    }

const creationHandler = async (event: React.SyntheticEvent) => {
        event.preventDefault();

        const TaskObject: TaskEntry = {
            name: name,
            date: Date,
            Tags: tags,
            time: time,
        }

       
        console.log('adding task to: ', goal)
        dispatch(addTask(TaskObject, goal));
        
        dispatch(createTask(TaskObject));
        
        setName('');
        setDate('');
        setTags([]);
        setTime(0)


}



    return (
        <div>
           
        <div>
            <form onSubmit={(creationHandler)}>
            date<input value={Date} onChange={({target}) => setDate(target.value)}/>

            name<input value={name} onChange={({target}) => setName(target.value)}/>

          
            <select value={goal} onChange= {e=> setGoal(e.target.value)}>
                <option key={"default"} value="default">No Goal Selected</option>
                {goals.map(goal=> (<option key={goal.name} value={goal.name}>{goal.name}</option>))}
            </select>

time<input value={time} onChange={({target}) => setTime(Number(target.value))}/>
                <button type='submit'>submit</button>
            </form>
        </div>


<div>
<input
            value={tag}
            onChange={({ target }) => setTag(target.value)}
          />

          <button onClick={addTag} type="button">
            add tag
          </button>

          <div>TAGS: {tags.map(tag=><p>{tag}</p>)}</div>

</div>
            
        </div>
    )
}

export default TaskForm