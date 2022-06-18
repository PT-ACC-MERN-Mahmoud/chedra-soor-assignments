import React from 'react';
const PersonCard = (props) => {
    return(
        <div>
            <h1 style={{color:"blue"}}>{props.title}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.color}</p>
        </div>
    );
}

export default PersonCard;

