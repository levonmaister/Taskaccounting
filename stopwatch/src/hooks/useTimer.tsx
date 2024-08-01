import {useEffect, useState} from 'react'


export const useTimer = () => {
    

  const [length, setLength] = useState(25)  
  const [minutes, setMinutes] = useState(length);
  const [seconds, setSeconds] = useState(0);
  const [paused, setPause] = useState(false);
  

  useEffect(() => {

if(!paused){

    let interval = setInterval(() => {
      clearInterval(interval);

 

      // MINUTE CHANGE
      if (seconds === 0) {
        //MINUTES LEFT
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } 
        //TIME RAN OUT
        else {
          setSeconds(seconds);
          setMinutes(minutes);
        }
        //SECONDS CHANGE
      } 
      else {
        setSeconds(seconds - 1);
      }



    }, 1000);

}

  }, [seconds, paused],);


const Pause = () => {
    setPause(true);
}

const Resume = () => {
    setPause(false);
}

const Reset = () => {
    setMinutes(25);
    setSeconds(0);
}

const ChangeLength = (length: number) => {
    setLength(length);
}

const GetDisplayTime = () : string => {
    const timerMinutes  = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds  = seconds < 10 ? `0${seconds}` : seconds;

    const Time_as_a_string  = `${timerMinutes}:${timerSeconds}`;

    return Time_as_a_string;
}


return{
    Pause, Resume, Reset, ChangeLength, GetDisplayTime, minutes
}

}