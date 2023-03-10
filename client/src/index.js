import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';


import {createStore}  from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    // Connects the store
    <Provider store={store}>
        <Header/>
        <App />
    </Provider>,
    document.getElementById('root')
);