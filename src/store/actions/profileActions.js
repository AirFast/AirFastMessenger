export const UPDATE_PROFILE_PHOTO = 'UPDATE_PROFILE_PHOTO';
export const UPDATE_PROFILE_PHOTO_SUCCESS = 'UPDATE_PROFILE_PHOTO_SUCCESS}';

export const updateProfilePhoto = file => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const storage = firebase.storage();
        const user = firebase.auth().currentUser;

        dispatch({type: UPDATE_PROFILE_PHOTO});

        storage.ref('users/' + file.name).put(file).then(res => {
            console.log(res)
            if (res.ref.fullPath === user.photoURL) {
                dispatch({type: UPDATE_PROFILE_PHOTO_SUCCESS});
                return;
            }

            if (user.photoURL) {
                storage.ref().child(user.photoURL).delete();
            }

            user.updateProfile({
                photoURL: res.ref.fullPath
            });

            res.ref.getDownloadURL().then(url => {
                firestore.collection('users/').doc(user.uid).update({
                    photoURL: url,
                });
                dispatch({type: UPDATE_PROFILE_PHOTO_SUCCESS});
            });

        }).catch(err => {
            console.log(err);
        })
    }
}