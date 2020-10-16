import React from 'react';
import './Circles.css';

function Circles(props) {
    return (

            <div className="Circles">
            <div className={props.selectedCircle === 1 ?"selected" : "square"}>1</div>
            <div className={props.selectedCircle === 2 ?"selected" : "square"}>2</div>
            <div className={props.selectedCircle === 3 ?"selected" : "square"}>3</div>
            <div className={props.selectedCircle === 4 ?"selected" : "square"}>4</div>

            </div>
            
    )
}

export default Circles;