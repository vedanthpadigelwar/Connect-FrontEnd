import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { userReducer } from './userReducer';

export const configureStore = () => {

    const store = createStore(
        combineReducers({
            userReducer
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}