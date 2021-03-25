import {
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    SIGNUP_ERROR,
    SIGNUP_SUCCESS,
    SIGNUP_VALIDATION_ERROR
} from '../actions/authActions';

const initState = {
    loginError: null,
    signupError: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_ERROR:
            return {
                ...state,
                loginError: action.err.message
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginError: null
            }
        case LOGOUT_SUCCESS:
            return state;
        case SIGNUP_ERROR:
            return {
                ...state,
                signupError: action.err.message
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signupError: null
            }
        case SIGNUP_VALIDATION_ERROR:
            return {
                ...state,
                signupError: 'The password confirmation does not match.'
            }
        default:
            return state;
    }
}

export default authReducer;