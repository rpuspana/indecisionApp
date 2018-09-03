import React from 'react';

// import the default class AddOption from AddOption.js file
import AddOption from './AddOption';

// import the const Header from Header.js
import Header from './Header'

// import the const Action from Action.js
import Action from './Action'

// import the const Options from Options.js
import Options from './Options'

class IndecisionApp extends React.Component {
    // this = component class instance

    constructor(props) {
        super(props);

        // bind it because you are calling this method in another context
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        // options will be read from localStorage
        this.state = {
            options: []
        };
    }

    // lifecycle method
    // when the component gets mounted to the DOM
    componentDidMount() {
        // console.log('fetching data');

        try {
             // get the options array from localStorage
            const json = localStorage.getItem('options');

            // convert the json to an object
            const options = JSON.parse(json);

            // if options is not null or there is an options array
            if (options) {
                // set the options array state to the optios array above
                this.setState(() => ({ options: options }));
            }
        } catch(err) {
            // fall to the component's default value aka []
        }
    }

    // lifecycle method
    // after the component updates (state values change or prop values change)
    componentDidUpdate(prevProps, prevState) {

        // state changed
        if (prevState.options.length !== this.state.options.length) {
            // console.log('saving data');

            // convert options array to a string reprezentation
            const json = JSON.stringify(this.state.options);

            // store this string in localStorage at the 'options' key
            localStorage.setItem('options', json);
        }
    }

    // lifecycle method
    // when a component is deleted from the DOM, gets replaced by another component/tag in the DOM
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    // wipe off the array
    handleDeleteOptions() {

        // return an object which has the options property set to []
        this.setState(() => ({ options: [] }));
    }

    // take an option and use setState to actually remove it
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            // use Array.prototype.filter()
            // = options will be assigned a new array with all the elements minus optionToRemove
            options: prevState.options.filter((option) => option !== optionToRemove)
        }))
    }

    handlePick() {
        // generate a number with a range of 0...optionsLength - 1
        const randomNum = Math.floor(Math.random() * this.state.options.length);

        const option = this.state.options[randomNum];

        alert(option);
    }

    handleAddOption(option) {

        // if empty string is passed on
        if (!option) {
            return 'Error: Enter a value';
        } 
        // if string already exists in the options array
        else if (this.state.options.indexOf(option) > -1) {
            return 'Error: This option already exists. Please enter a different one.'
        }

        this.setState((prevState) => (
            // create a new array by concatening the prevState.options array with the value option
            { options: prevState.options.concat(option) }
        ))
    }

    // render these 4 components
    render() {
        // const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />

                {/* props: hasOptions, handlePick */}
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />

                {/* props: options, handleDeleteOptions */}
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />

                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
};

// default value for the state.options array
// IndecisionApp.defaultProps = {
//     options: []
// };

export default IndecisionApp;