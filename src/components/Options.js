import React from 'react';

// import the const Option from Option.js
import Option from './Option'

// create a paragraph tag for each option in the options array
// render new p tag for each option {set text set key}
// list of all available options - React renders each one at at time
// stateless functional component - it just renders stuff
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>
                Remove options
            </button>
            {props.options.length === 0 && <p>Please add a list item to get started</p>}
            <br />
            {props.options.map(option => (
                <Option 
                key={option}
                optionText={option} 
                handleDeleteOption={props.handleDeleteOption} />
            ))}
        </div>
    );
}

export default Options;