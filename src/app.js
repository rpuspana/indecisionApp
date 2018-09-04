// install - import - use react and react-dom npm packages
// import statement presented in the official React documentation
import React from 'react'; 
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

// ******** experiment *********
const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    );
};

// render IndecisionApp component 
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));