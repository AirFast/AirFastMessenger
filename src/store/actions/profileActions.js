//export const SET_PROFILE_PHOTO_URL = 'SET_PROFILE_PHOTO_URL';

export const updateProfile = file => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const storage = firebase.storage();
        const user = firebase.auth().currentUser;

        storage.ref('users/' + file.name).put(file).then(res => {
            if (res.ref.fullPath === user.photoURL) return;

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
            });
        }).catch(err => {
            console.log(err);
        })
    }
}