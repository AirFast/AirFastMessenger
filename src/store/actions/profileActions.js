export const CHANGE_PROFILE_INPUTS = 'CHANGE_PROFILE_INPUTS';

export const updateProfile = payload => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;

        console.log(user.uid)

        firebase.storage().ref('users/' + payload.name).put(payload).then(res => {
            return firestore.collection('users/').doc(user.uid).update({
                profileImg: res.ref.fullPath,
            });
            console.log(res.ref.fullPath);
            res.ref.getDownloadURL().then(url => {
                console.log(url)
            })
        }).catch(err => {
            console.log(err);
        })
    }
}