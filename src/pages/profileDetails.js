import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";

const ProfileDetails = (props) => {
    const {auth, user} = props;
    if (!auth.uid) return <Redirect to={'/login'}/>

    if (user) {
        return (
            <div className='row'>
                <h1>{user.firstName}</h1>
            </div>
        );
    } else {
        return (
            <div className='row'>
                <div className='col-auto p-60 m-auto'>User profile is loading...</div>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const users = state.firestore.data.users;
    const user = users ? users[id] : null;
    return {
        auth: state.firebase.auth,
        user: user
    }
};

export default compose(
    firestoreConnect([
        {collection: 'users'}
    ]),
    connect(mapStateToProps),
)(ProfileDetails);