import React, {useState} from 'react';
import Break from './components/Break';
import './assets/main.css';
import Session from './components/Session';
import TimeLeft from './components/Timeleft';



function App() {

    const audioElement = useRef(null);
    const [currentSessionType,setCurrentSessionType] =useState('Session');

    const [intervalId , setIntervalId] = useState(null);

    const [sessionLength , setSessionLength] = useState(60 * 25);  
    
    const [breakLength , setBreakLength] = useState(300);
    const[timeLeft, setTimeLeft] = useState(sessionLength);


    useEffect (() => {

      setTimeLeft(sessionLength);

    },[sessionLength]);

    const decrementBreakLengthByOneMinute = () =>{
        const newBreakLength = breakLength - 60;

        if(newBreakLength > 0 ){

            setBreakLength(newBreakLength);
        }

        
        
    };
    const incrementBreakLengthByOneMinute = () =>{

      const newBreakLength = breakLength + 60

      if(newBreakLength <= 60 * 60) {

          setBreakLength(newIntervalId);
      }

        setBreakLength(breakLength + 60);

    };

    const decrementSessionLengthByOneMinute = () =>{
        const newSessionLength = sessionLength - 60;

        if (newSessionLength > 0){

            setSessionLength(newSessionLength);
       
        
    };
    const incrementSessionLengthByOneMinute = () =>{

        const incrementSessionLength = sessionLength + 60 ;

        if(newSessionLength <=  60 * 60) {

          setSessionLength(newSessionLength);
        }

       

    };


    const isStarted = intervalId !== null;

    const handleStartStopClick = () => {

        if(isStarted) {

            clearInterval(intervalId);
            setIntervalId(null);

        }else {

            const newIntervalId = setInterval(() => {

                setTimeLeft(prevTimeLeft => {
                 const newTimeLeft =  prevTimeLeft -1;
                 if(newTimeLeft >= 0){
 
                     return newTimeLeft;
                }
                 audioElement.current.play();
                 if(currentSessionType === 'Session'){

                    setCurrentSessionType('Break');

                   return breakLength;

                 }else if (currentSessionType === 'Break'){

                    setCurrentSessionType('Session');

                   return sessionLength;
                 }
                
             });
             },100);

             
        }

        
    };

    const handleResetButtonClick = () => {

    audioElement.current.load()

     clearInterval(intervalId)

     setIntervalId(null)

     setCurrentSessionType('Session')

     setSessionLength(60 * 25)

     setBreakLength(60 * 5)

     setTimeLeft(60 * 25)
    };

  return (
    <div className="felx flex-col h-screen items-center justify-center bg-blue-500">

      <div className="flex w-full justify-around ">
     <Break 
     
     decrementBreakLengthByOneMinute = {decrementBreakLengthByOneMinute}
     incrementBreakLengthByOneMinute = {incrementBreakLengthByOneMinute}

     
     />

     <TimeLeft  
     handleResetButtonClick={handleResetButtonClick}
     timerLabel={currentSessionType}  handleStartStopClick={handleStartStopClick} sessionLength={sessionLength} startStopButtonLabel={isStarted ? 'Stop' : 'Start'} timeLeft={timeLeft} />
     <Session 
      
      decrementSessionLengthByOneMinute = {decrementSessionLengthByOneMinute}

      incrementSessionLengthByOneMinute = {incrementSessionLengthByOneMinute}

     />

</div>

     

      <audio id="beep" ref={audioElement}>

          <source src="https://onlineclock.net/audio/options.default.mp3" type="audio/mpeg" />
      </audio>

    </div>
  );
}
}
export default App;
