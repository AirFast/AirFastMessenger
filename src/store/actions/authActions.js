export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const login = credentials => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: LOGIN_SUCCESS });
        }).catch(err => {
            dispatch({ type: LOGIN_ERROR, err });
        });
    }
};

export const logout = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: LOGOUT_SUCCESS });
        });
    }
};