import React from 'react';
import './CircleSelector.css'

function CircleSelector(props) {
    
    return (
    <div className="CircleSelector">
        {props.circles.map((circle, idx) => (
        <button className={props.selectedCircle === (idx + 1) ? "selected" : ""} 
        key={idx} 
        onClick={() => props.handleColorSelection(circle)}>{props.selectedCircle === circle ? `circle ${circle} selected` : `select circle ${circle}`}</button>

        ))
}
    </div>
    
    )
}
export default CircleSelector;