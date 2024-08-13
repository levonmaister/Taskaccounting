import {appendTasks} from '../../reducers/taskReducer';
import{ appendTask} from '../../reducers/goalReducer'
import {useState} from 'react'
import { Task, TaskEntry } from '../../reducers/reducerTypes';
import {useSelector} from 'react-redux'
//import {State} from './reducers/store';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../reducers/store';
import { ALL_GOALS, ALL_TASKS, CREATE_TASK } from '../../services/queries';
import { useMutation } from '@apollo/client';




const TaskForm = () => {
    const [Date, setDate] = useState('');
    const [name, setName] = useState('');
    const [tags,setTags] = useState<string[]>([]);
    const [tag, setTag] = useState<string>('');
    const [time, setTime] = useState(0);


    const [createTaskMutation] = useMutation(CREATE_TASK, {
        refetchQueries: [  {query: ALL_TASKS}, {query: ALL_GOALS} ]
       }); 

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
            Goal: goal,
        }

       
        console.log('adding task to: ', goal);

        const newTaskPromise = await createTaskMutation({ variables: { input: TaskObject } });

        console.log('MUTATION RETURNED: ', newTaskPromise);
        console.log('DATA RETURNED: ', newTaskPromise.data.createTask);
      
      let newTask : Task;
      
       if(newTaskPromise.data){
        newTask = newTaskPromise.data.createTask;
        dispatch(appendTasks(newTask));
        dispatch(appendTask(newTask));
        setName('');
        setTags([]);
        setTag('');
        setDate('');
        setGoal('');
        setTime(0)
      }
      


}



    return (
        <div>
           
        <div>
            <form onSubmit={(creationHandler)}>
            date<input value={Date} type="date"  name="date" required  onChange={(event) => setDate(event.target.value)} />

            name<input value={name} onChange={({target}) => setName(target.value)}/>

          
            <select value={goal} onChange= {e=> setGoal(e.target.value)}>
                <option key={"default"} value="default">No Goal Selected</option>
                {goals.map(goal=> (<option key={goal._id} value={goal._id}>{goal.name}</option>))}
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