import React from 'react'
import moment from 'moment';
import momentDurationFormatSetUp from 'moment-duration-format';
import React, {useState} from 'react';
import { useEffect } from 'react';

momentDurationFormatSetUp(moment);

const Timeleft = ({

    sessionlength })=> {

        const[timeLeft, setTimeLeft] = useState(sessionLength);

        useEffect(() => {

            setTimeLeft (sessionLength); 

        },[sessionLength]);

        const handleStartStopClick = ()=> {

            setInterval(() => {

                console.log('hello');
            },1000)
        }
        const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss');
    return (
        <div>
            {formattedTimeLeft}
            <button onClick={handleStartStopClick}>Start</button>
        </div> );
    
};

export default Timeleft;
