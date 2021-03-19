import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import firebase from 'firebase/app'
import {createFirestoreInstance} from 'redux-firestore';
import reduxStore from './store/reduxStore';

const rrfProps = {
    firebase,
    config: {
        userProfile: 'users',
        useFirestoreForProfile: true,
    },
    dispatch: reduxStore.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
    //<React.StrictMode>
        <BrowserRouter>
            <Provider store={reduxStore}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <App/>
                </ReactReduxFirebaseProvider>
            </Provider>
        </BrowserRouter>,
    //</React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
