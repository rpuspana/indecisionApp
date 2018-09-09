// install - import - use react and react-dom npm packages
// import statement presented in the official React documentation
import React from 'react'; 
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

// import node_modules/normalize.css/normalize.css
import 'normalize.css/normalize.css';

// load all of our styles in => get they styles into the DOM
import './styles/styles.scss'

// render IndecisionApp component 
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));