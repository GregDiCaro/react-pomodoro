
import React from 'react';
import moment from 'moment';


const Break = ({

    breakLength,
    decrementBreakLengthByOneMinute ,
    incrementBreakLengthByOneMinute ,

}) => {

 
    const breakLengthInMinutes = moment.duration(breakLength, 's').asMinutes();
    return (

            <BreakSessionContainer>
                    <BreakSessionLabel id="break-label">break</BreakSessionLabel>
                    <BreakSessionTime id="break-length">{breakLengthInMinutes}</BreakSessionTime>
                    <PlusMinusButtonContainer>

                    <PlusMinusButton id="break-decrement" onClick={decrementBreakLengthByOneMinute}>-</PlusMinusButton>
                    <PlusMinusButton id="break-increment" onClick={incrementBreakLengthByOneMinute}>+</PlusMinusButton>
                    
                    </PlusMinusButtonContainer>
                   

            </BreakSessionContainer>


    );
        

    
}

export default Break;

