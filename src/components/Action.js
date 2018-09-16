import React from 'react';

// stateless functional component - they just render stuff
const Action = (props) => (

    // return this div. This return plays the role of render
    <div>
        <button 
            className="big-button"
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
            What should I do
        </button>
    </div>
);

export default Action;