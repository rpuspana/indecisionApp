import React from 'react';

// import the const Option from Option.js
import Option from './Option'

// create a paragraph tag for each option in the options array
// render new p tag for each option {set text set key}
// list of all available options - React renders each one at at time
// stateless functional component - it just renders stuff
const Options = (props) => (
    // return this div. This return plays the role of render
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}
            >
                Remove options
            </button>
        </div>
       
        {
            props.options.length === 0 && 
            <p className="widget__message">
                Please add a list item to get started
            </p>
        }
        <br />
        {props.options.map((option, index) => (
            <Option 
            key={option}
            optionText={option}
            count={index + 1}
            handleDeleteOption={props.handleDeleteOption} />
        ))}
    </div>
);

export default Options;