
console.log('App.js is running');

// jsx = javascript xml = javascript extension provided by React = templating engine
// jsx get compiled to javascrpit with the help of babel

// babel = js compiler
// es6, es7 and compile it to es5

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const appRoot = document.getElementById('app');

const onFormSumbmit = (eventObj) => {

    eventObj.preventDefault();

    // get user value from the form input field
    // .option references the name=option from the form
    const option = eventObj.target.elements.option.value;

    // run only if option string is not empty
    if(option) {
        app.options.push(option);
        eventObj.target.elements.option.value = '';
    }

    console.log('form submited');

    render();

}

// wipes out app.render and rerenders so the count will be 0
const onRemoveAll = () => {

    app.options.length = 0;

    render();
}

// generate a random number
// find the option that was randomly selected and print it
const onMakeDecision = () => {

    // generate a number with a range of 0...listLength - 1
    const randomNum = Math.floor(Math.random() * app.options.length);

    const option = app.options[randomNum];

    alert(option);
}

// render the app to the screen
const render = () => {

    // jsx expression
    // () just for decoration
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove all</button>
            <ol>
                {/* render the items in the app.options */}
                {app.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSumbmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();