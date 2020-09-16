
import React from 'react';
import moment from 'moment';

const Session = ({
sessionLength,
decrementSessionLengthByOneMinute ,
incrementSessionLengthByOneMinute, 
}) => {
    
    
    const sessionLengthInMinutes = moment.duration(sessionLength, 's').minutes();
    return (
                
            <div>
                    <p className="bg-blue-200 m-2 hover:bg-blue-700 text-green-800 font-bold py-2 px-4 rounded-full "id="session-label">session</p>
                    <p className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" id="session-length">{sessionLengthInMinutes}</p>
                
                    <button className="bg-white m-2 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" id="session-decrement" onClick={decrementSessionLengthByOneMinute}>-</button>
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" id="session-increment" onClick={incrementSessionLengthByOneMinute}>+</button>
                   
                    
                    

            </div>


    );
        

    
}

export default Session;

