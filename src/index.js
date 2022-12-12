import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// TODO: Add reducers
// You could have a reducer for each page if you want

//setting the initial state for the feedback object
const initialState = {
    feeling: '',
    understanding: '',
    supported: '',
    comments: '',
}

    const feedbackReducer = (state = initialState, action) => {
        console.log('feeling');
        if(action.type === 'FEELING') {
            return {...state, feeling: action.payload};
        } else if(action.type === 'UNDERSTANDING') {
            return {...state, understanding: action.payload};
        } else if(action.type === 'SUPPORTED') {
            return {...state, supported: action.payload};
        } else if(action.type === 'COMMENTS') {
            return {...state, comments: action.payload};
        } else if(action.type === 'SUBMIT') {
            return initialState;
        } 
        return state
    }

    const adminReducer = (state = [], action) => {
        console.log('in adminReducer');
        if(action.type === 'ADMIN') {
            return action.payload;
        }
        return state;
    }

// TODO: Add store
//if you do a reducer for each page, the store would have
const reduxStore = createStore(
    combineReducers({
        feedbackReducer,
        adminReducer
    }),
    applyMiddleware(logger)
);


// TODO: wrap <App /> in <Provider>
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
