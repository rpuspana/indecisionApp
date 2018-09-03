class Counter extends React.Component {
    constructor(props) {

        // this = component instance

        super(props);

        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        // state of component
        this.state = {
            // count will be taken from localStorage
            count: 0
        };
    }

    // lifecycle method
    // when the component gets mounted to the DOM
    componentDidMount() {
        console.log('fetching data');

        try {
            // get item from localStorage
            const numJSON = localStorage.getItem('count');

            // convert string to int
            const num = parseInt(numJSON, 10);

            // if number not null or there is a localStorage key called num
            if (!isNaN(num)) {
                this.setState(() => ({ count: num }))
            }
        } catch(err) {
            // fall to the component's default value aka 0
        }
    }

    // lifecycle method
    // after the component updates (state values change or prop values change)
    componentDidUpdate(prevProps, prevState) {

        // state changed
        if (prevState.count !== this.state.count) {
            console.log('saving data');

            // store this string in localStorage at the 'options' key
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        // prevState = state object before your changes have been applied
        this.setState((prevState) => {
            // updates we want to make
            return {
                // update the count property of the state object
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// const user = {
//     name: 'Andrew',
//     age: 26,
//     location: 'Philadelphia'
// };

// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     }

//     // if there is nothing returned, the function returns undefined by default
// }

// // {any javascrip expression}
// const template2 = (
//     <div>
        
//         <h1>{user.name ? user.name : 'Annonymous'}</h1>
//         {(user.age && user.age>= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

// let count = 0;

// const addOne = () => {
//     console.log('addOne', count);
//     count++;
//     renderCounterApp();
// }

// const minusOne = () => {
//     console.log('minusOne');
//     count--;
//     renderCounterApp();
// };

// const reset = () => {
//     console.log('reset');
//     count = 0;
//     renderCounterApp();
// };



// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <br />
//             <button onClick={minusOne}>-1</button>
//             <br />
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     // render templateTwo as a React object to the DOM
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();