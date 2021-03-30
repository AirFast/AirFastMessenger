export const SET_PROFILE_PHOTO_URL = 'SET_PROFILE_PHOTO_URL';

export const updateProfile = payload => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        //const firestore = getFirestore();
        const user = firebase.auth().currentUser;

        firebase.storage().ref('users/' + payload.name).put(payload).then(res => {
            return user.updateProfile({
                photoURL: res.ref.fullPath
            })

            // return firestore.collection('users/').doc(user.uid).update({
            //     photoURL: res.ref.fullPath,
            // });
            //console.log(res.ref.fullPath);
            // res.ref.getDownloadURL().then(url => {
            //     console.log(url)
            // })
        }).catch(err => {
            console.log(err);
        })
    }
}

export const setProfilePhotoURL = payload => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        const storageRef = firebase.storage().ref();

        storageRef.child(payload).getDownloadURL().then(url => {
            return dispatch({type: SET_PROFILE_PHOTO_URL, url});
        }).catch(err => {
            console.log(err)
        });
    }
}