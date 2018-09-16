import React from 'react';

// stateless functional component - it just renders stuff
const Option = (props) => (
    // return this div. This return plays the role of render
    <div className="option">

        <p className="option__text">{props.count}. {props.optionText}</p>

        <button
            className="button button--link"
            onClick={(evnt) => {
                props.handleDeleteOption(props.optionText)
            }}
        >
            remove
        </button>
    </div>
);

export default Option;