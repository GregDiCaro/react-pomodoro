
import React from 'react';
import moment from 'moment';

const Session = ({
sessionLength,
decrementSessionLengthByOneMinute ,
incrementSessionLengthByOneMinute, 
}) => {
    
    
    const sessionLengthInMinutes = moment.duration(sessionLength, 's').asMinutes();
    return (

            <BreakSessionContainer>
                    <BreakSessionLabel id="session-label">session</BreakSessionLabel>
                    <BreakSessionTime id="session-length">{sessionLengthInMinutes}</BreakSessionTime>
                    <PlusMinusButtonContainer>
                    <PlusMinusButton id="session-decrement" onClick={decrementSessionLengthByOneMinute}>-</PlusMinusButton>
                    <PlusMinusButton id="session-increment" onClick={incrementSessionLengthByOneMinute}>+</PlusMinusButton>
                    </PlusMinusButtonContainer>
                    
                    

            </BreakSessionContainer>


    );
        

    
}

export default Session;

