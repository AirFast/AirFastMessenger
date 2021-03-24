import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

const Home = (props) => {

    const {dialogs, auth} = props;
    if (!auth.uid) return <Redirect to={'/login'}/>

    return (
        <div className='row'>
            <h1>Home page</h1>
            <p>{dialogs && dialogs.map(dialog => (dialog.name))}</p>
        </div>
    );
}

const mapStateToProps = state => ({
    dialogs: state.firestore.ordered.dialogs,
    auth: state.firebase.auth
});

export default compose(
    firestoreConnect([
        {collection: 'dialogs'}
    ]),
    connect(mapStateToProps),
)(Home);