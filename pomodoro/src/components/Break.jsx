
import React from 'react';
import moment from 'moment';


const Break = ({

    breakLength,
    decrementBreakLengthByOneMinute ,
    incrementBreakLengthByOneMinute ,

}) => {

 
    const breakLengthInMinutes = moment.duration(breakLength, 's').minutes();
    return (

        <div>
        <p className="bg-blue-200 m-2 hover:bg-blue-700 text-green-800 font-bold py-2 px-4 rounded-full "id="break-label">break</p>
        <p className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" id="break-length">{breakLengthInMinutes}</p>
    
        <button className="bg-white m-2 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" id="break-decrement" onClick={decrementBreakLengthByOneMinute}>-</button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" id="break-increment" onClick={incrementBreakLengthByOneMinute}>+</button>
       
        
        

</div>


    );
        

    
}

export default Break;

