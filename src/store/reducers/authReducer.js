import {LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS} from '../actions/authActions';

const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_ERROR:
            console.error('login err');
            return {
                ...state,
                authError: 'Login failed...'
            };
        case LOGIN_SUCCESS:
            console.log('login');
            return {
                ...state,
                authError: null
            }
        case LOGOUT_SUCCESS:
            console.log('logout');
            return state;
        default:
            return state;
    }
}

export default authReducer;