import {createGoal} from '../../reducers/goalReducer';
import {useState} from 'react'
import { GoalEntry,TaskEntry } from '../../reducers/reducerTypes';
import {useSelector} from 'react-redux'
//import {State} from './reducers/store';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../reducers/store';


const GoalForm = () => {

    const [name, setName] = useState<string>('');
     const [description, setDescription] = useState<string>('');
     const [tags,setTags] = useState<string[]>([]);
     const [tag, setTag] = useState<string>('');

     const dispatch = useDispatch<AppDispatch>();
     const goals = useSelector((state: RootState ) => state.goals);



const addTag = () => {
    setTags(tags.concat(tag))
    setTag('')
}


const handleGoalCreation = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    
    

  const TaskList: TaskEntry[] = []

  const GoalObject: GoalEntry = {
      name: name,
      description: description,
      Tags: tags,
      Tasks: TaskList
  }

  console.log('adding goal...', GoalObject)
  console.log("store: ", goals)

  dispatch(createGoal(GoalObject));

  setName('')
  setTags([]);
  setTag('')
  setDescription('')

}




  return (
    <div>
 
 <div>
 <form onSubmit={(handleGoalCreation)}>
  name<input value={name} onChange={({target}) => setName(target.value)}/>
  description<input value={description} onChange={({target}) => setDescription(target.value)}/>
  <button type="submit">submit</button>
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
  </div>
<div>TAGS: {tags.map(tag=><p>{tag}</p>)}</div>
 </div>
  )
}



export default GoalForm;