import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import firebase from 'firebase/app';
import {firebaseReducer, getFirebase} from 'react-redux-firebase';
import {firestoreReducer, getFirestore, reduxFirestore} from 'redux-firestore';
import {firebaseConfig} from '../config/firebaseConfig';
import authReducer from './reducers/authReducer';
import dialogReducer from './reducers/dialogReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    dialog: dialogReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

const reduxStore = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebase, firebaseConfig),
    )
);

export default reduxStore;