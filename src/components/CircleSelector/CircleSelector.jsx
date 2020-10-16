import React from 'react';
import './CircleSelector.css'

function CircleSelector(props) {

    return (
    <div className="CircleSelector">
    {props.circles.map((circle, idx) => (
    <button classname="CircleSelector" 
    key={idx} 
    onClick={() => props.handleColorSelection(circle)}>Select Circle {circle}</button>

    ))
}
    </div>
    
    )
}
export default CircleSelector;