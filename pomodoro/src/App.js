import React, {useEffect, useState, useRef} from 'react';
import Break from './components/Break';
import './assets/main.css';
import Session from './components/Session';
import TimeLeft from './components/Timeleft';
import soundfile from './ride.wav';



function App() {

    const audioElement = useRef();
    
    const [currentSessionType,setCurrentSessionType] = useState('Session');

    const [intervalId , setIntervalId] = useState(null);

    const [sessionLength , setSessionLength] = useState(60 * 25);  
    
    const [breakLength , setBreakLength] = useState(300);
    const[timeLeft, setTimeLeft] = useState(sessionLength);


    useEffect (() => {

      setTimeLeft(sessionLength);

    },[sessionLength]);

    useEffect ( () => {

      if(timeLeft === 0){

        audioElement.current.play();

        if(currentSessionType === 'Session'){

          setCurrentSessionType('Break');
          setTimeLeft(breakLength);

        }else if (currentSessionType === 'Break'){

            setCurrentSessionType('Session');

            setTimeLeft(sessionLength);
        }
      }

    },[breakLength ,currentSessionType,sessionLength,timeLeft]);

    const decrementBreakLengthByOneMinute = () =>{
        const newBreakLength = breakLength - 60;

        if(newBreakLength < 0 ){

            setBreakLength(0);
        }else {

          setBreakLength(newBreakLength)
        }

        
        
    };
    const incrementBreakLengthByOneMinute = () =>{

    setBreakLength(breakLength +60)
  }
    const decrementSessionLengthByOneMinute = () =>{
       const newSessionLength = sessionLength - 60; 

       
        if (newSessionLength < 0){

          setSessionLength(0);

            setSessionLength(newSessionLength);
       
        }else{

          setSessionLength(newSessionLength);
        }
  
  }
    const incrementSessionLengthByOneMinute = () =>{

     
      setSessionLength(sessionLength + 60)
    };


    const isStarted = intervalId !== null;
    

    const handleStartStopClick = () => {

        if(isStarted) {

            clearInterval(intervalId);
            setIntervalId(null);

        }else {

            const newIntervalId = setInterval(() => {
              setTimeLeft(prevTimeLeft => {

                const newTimeLeft = prevTimeLeft -1;

                if(newTimeLeft >= 0){

                  return prevTimeLeft - 1;
                }

                audioElement.current.play();
                if(currentSessionType === 'Session'){

                  setCurrentSessionType('Break');
                  setTimeLeft(breakLength);
                }

                else if (currentSessionType === 'Break'){

                    setCurrentSessionType('Session');

                    setTimeLeft(sessionLength);
                }
                // setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
                 
                
             });
             
            },100);

            setIntervalId(newIntervalId);
             
        }

      } ;
    

  

    const handleResetButtonClick = () => {

    audioElement.current.pause();
    audioElement.current.currentTime = 0 ;


     clearInterval(intervalId);

     setIntervalId(null);

     setCurrentSessionType('Session');

     setSessionLength(60 * 25);

     setBreakLength(60 * 5);

     setTimeLeft(60 * 25);
    };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-yellow-400">

      <div className="flex w-full justify-around ">
     <Break 
     breakLength={breakLength}
     decrementBreakLengthByOneMinute = {decrementBreakLengthByOneMinute}
     incrementBreakLengthByOneMinute = {incrementBreakLengthByOneMinute}

     
     />

     <TimeLeft  
     handleStartStopClick={handleStartStopClick} 
     timerLabel={currentSessionType}  
     startStopButtonLabel={isStarted ? 'Stop' : 'Start'} 
     timeLeft={timeLeft} 
     />

     <Session 
      sessionLength={sessionLength}
      decrementSessionLengthByOneMinute = {decrementSessionLengthByOneMinute}

      incrementSessionLengthByOneMinute = {incrementSessionLengthByOneMinute}
     
     />

</div>
      <button className="border-2 text-red-200 font-semibold bg-green-900 px-4 py-2 rounded-lg border-solid  rounded-lgid" onClick={handleResetButtonClick}>
        Reset
      </button>
     
     
      <audio id="beep" ref={audioElement} src={soundfile} type='audio'>

           
      </audio>

    </div>
  );
}

export default App;