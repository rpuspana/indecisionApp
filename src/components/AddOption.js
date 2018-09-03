import React from 'react';

// allow the user to add an option
export default class AddOption extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        }
    }

    handleAddOption(evnt) {
        evnt.preventDefault();

        // get option element from <input ... name="option" />
        const option = evnt.target.elements.option.value.trim();

        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error: error }));

        if (!error) {
            // wipe the input value if there was no error
            evnt.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option---</button>
                </form>
            </div>
        );
    }
}