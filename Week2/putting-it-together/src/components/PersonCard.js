import React, { useState } from 'react';

const PersonCard = (props) => {
    const [ageState, setAgeState] = useState(props.age);
    return(
        <div>
            <h1 style={{color:"blue"}}>{props.title}</h1>
            <p>Age: {ageState}</p>
            <p>Hair Color: {props.color}</p>
            <button onClick={() => setAgeState(ageState + 1)}>Birthday Button for {props.title}</button>
        </div>
    );
}

export default PersonCard;
