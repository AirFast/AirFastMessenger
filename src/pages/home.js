import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

const Home = (props) => {

    const {dialogs} = props;

    return (
        <div>
            <h1>Home page</h1>
            <p>{dialogs && dialogs.map(dialog => (dialog.name))}</p>
        </div>
    );
}

const mapStateToProps = state => ({
    dialogs: state.firestore.ordered.dialogs
});

export default compose(
    firestoreConnect([
        {collection: 'dialogs'}
    ]),
    connect(mapStateToProps),
)(Home);