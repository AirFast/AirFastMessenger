import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Home page</h1>
            </div>
        );
    }
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