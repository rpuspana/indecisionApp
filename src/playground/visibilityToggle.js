// when clicking this button, this text appears: hey. these are some details you can now see!
// the button text now shows Hide details

console.log('App.js is running');

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)

        // ensure that inside handleToggleVisibility(), this refers to the component instance
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {
                    this.state.visibility && 
                    <div>
                        <p>Here are some details</p>
                    </div>
                }
            </div>
        );
    }
}



ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));