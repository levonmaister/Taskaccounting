import {appendGoal} from '../../reducers/goalReducer';
import {useState} from 'react'
import { Goal, GoalEntry } from '../../reducers/reducerTypes';

//import {State} from './reducers/store';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../reducers/store';
import { useMutation } from '@apollo/client';
import { CREATE_GOAL } from '../../services/queries';


const GoalForm = () => {

     const [name, setName] = useState<string>('');
     const [description, setDescription] = useState<string>('');
     const [tags,setTags] = useState<string[]>([]);
     const [tag, setTag] = useState<string>('');
    

     const dispatch = useDispatch<AppDispatch>();
    

     const [createGoalMutation] = useMutation(CREATE_GOAL); 


const addTag = () => {
    setTags(tags.concat(tag))
    setTag('')
}


const handleGoalCreation = async (event: React.SyntheticEvent) => {
    event.preventDefault();


  const GoalObject: GoalEntry = {
      name: name,
      description: description,
      Tags: tags,
  }


  console.log('adding goal...', GoalObject)


 const newGoalPromise = await createGoalMutation({ variables: { input: GoalObject } });


  console.log('MUTATION RETURNED: ', newGoalPromise);
  console.log('DATA RETURNED: ', newGoalPromise.data.createGoal);

let newGoal : Goal

 if(newGoalPromise.data){
  newGoal = newGoalPromise.data.createGoal;
  dispatch(appendGoal(newGoal));
  setName('')
  setTags([]);
  setTag('')
  setDescription('')
}





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