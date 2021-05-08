import * as ActionTypes from './ActionTypes';

export const userReducer = (
    state = {
        email: null,
        userName: null,
        errMess: null,
        signedIn: false,
        loading: false
    }, action) => {
    switch (action.type) {

        case ActionTypes.SET_USER:
            return {
                ...state,
                errMess: null,
                email: action.payload.email,
                userName: action.payload.userName
            };

        case ActionTypes.SIGNEDIN:
            return { ...state, errMess: null, signedIn: action.payload };

        case ActionTypes.FAIL:
            return { ...state, errMess: action.payload, loading: false };

        case ActionTypes.LOADING:
            return { ...state, errMess: null, loading: action.payload };

        case ActionTypes.CLEAR_USER:
            return {
                ...state,
                errMess: null,
                email: null,
                userName: null
            };

        default:
            return state;
    }
}