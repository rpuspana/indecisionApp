import React from 'react';

// stateless functional component - they just render stuff
const Action = (props) => {

    // plays the role of render
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do
            </button>
        </div>
    );
};

export default Action;