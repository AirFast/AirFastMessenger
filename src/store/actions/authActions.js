export const CHANGE_LOGIN_INPUTS = 'CHANGE_LOGIN_INPUTS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const SIGNUP_VALIDATION_ERROR = 'SIGNUP_VALIDATION_ERROR';

export const changeLoginInputs = payloads => {
    return (dispatch, getState) => {
        dispatch({type: CHANGE_LOGIN_INPUTS, payloads});
    }
};

export const login = credentials => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: LOGIN_SUCCESS});
        }).catch(err => {
            dispatch({type: LOGIN_ERROR, err});
        });
    }
};

export const logout = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: LOGOUT_SUCCESS});
        });
    }
};

export const signup = newUser => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(resp => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            });
        }).then(() => {
            dispatch({type: SIGNUP_SUCCESS});
        }).catch(err => {
            dispatch({type: SIGNUP_ERROR, err});
        });
    }
};

export const signupValidationError = () => {
    return (dispatch, getState) => {
        dispatch({type: SIGNUP_VALIDATION_ERROR});
    }
};