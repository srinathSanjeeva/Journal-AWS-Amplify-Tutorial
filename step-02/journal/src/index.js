import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const startApp = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();
};
if(window.cordova) {
    document.addEventListener('deviceready', startApp, false);
} else {
    startApp();
}

