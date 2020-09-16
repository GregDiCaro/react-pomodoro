import React from 'react'
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';


momentDurationFormatSetup(moment);



const Timeleft = ({handleResetButtonClick,handleStartStopClick,timeLeft,timerLabel,startStopButtonLabel})=> {

   

        

        const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss');
    return (
        <div className="flex flex-col justify-evenly items-center w-64 h-64 bg-red-600 rounded-full">
            
            <p className="text-red-900 text-2xl  "  id="timer-label">{timerLabel}</p>
            <p className="font-clock text-4xl font-bold" id="timer-left">{formattedTimeLeft}</p>

            <div className="grid grid-flow-col gap-2">
            <button className="text-red-400 font-semibold bg-green-900 px-4 py-2 rounded-lg" onClick={handleStartStopClick}>{startStopButtonLabel}</button>

            </div>
        </div> );
    
};
    

export default Timeleft;
