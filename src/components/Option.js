import React from 'react';

// stateless functional component - it just renders stuff
const Option = (props) => (
    // return this div. This return plays the role of render
    <div>
        {props.optionText}
        <button
            onClick={(evnt) => {
                props.handleDeleteOption(props.optionText)
            }}
        >
            remove
        </button>
    </div>
);

export default Option;