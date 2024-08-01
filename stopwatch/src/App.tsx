
import {useTimer} from './hooks/useTimer';

import {useState} from  'react';

function App() {
  const Timer = useTimer();
  const Time = Timer.GetDisplayTime();

  const [name, setName] = useState('levon');
  const [text, setText] = useState(''); 



const handlePause = () => {
  console.log('PAUSE INVOKED');
  Timer.Pause();
}

const handleResume = () => {
  console.log('RESUME INVOKED');
  Timer.Resume();
}

const handleRefresh = () => {
    setName(text);
    setText('');
    console.log(name);
}

  return (
    <div>
    {Time}

    <button type='submit' onClick={handlePause}>Pause</button>
    <button type='submit' onClick={handleResume}>Resume</button>
 

<form onSubmit={(handleRefresh)}>
  <input type='text' onChange={(event)=> setText(event.target.value) } />
  <button type='submit'>Submit</button>
</form>

    <p>{name}</p>
 </div>
  )


}

export default App
