import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import ProfileCard from '../components/Profile/ProfileCard';

const Home = (props) => {

    const {auth, users} = props;
    if (!auth.uid) return <Redirect to={'/login'}/>

    return (
        <>
            <div className='row'>
                <div className='col-5 col-md-7 col-sm-12 p-60 m-auto'>
                    <h2 className='t-center'>Users</h2>
                    <p className='t-center'>List of users registered in this network.</p>
                </div>
            </div>
            <div className='row'>
                {users && users.map(user => <ProfileCard user={user} key={user.id}/>)}
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    auth: state.firebase.auth,
    users: state.firestore.ordered.users,
});

export default compose(
    firestoreConnect([
        {collection: 'users'}
    ]),
    connect(mapStateToProps),
)(Home);