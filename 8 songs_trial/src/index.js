import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux'; // when you createStore(combineReducers(..)), you get the entire store

import App from './components/App';
import reducers from './reducers'; // if no file specified, will auto use the index.js in there.

// by passing store as a prop into Provider, it allows the Provider direct access to the store to talk to it.
// the connect() will allow us to talk to the provider, to then talk to the store
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>,
    document.querySelector('#root'));