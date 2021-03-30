import {SET_PROFILE_PHOTO_URL} from '../actions/profileActions';

const initSate = {
    photoURL: null
}

const profileReducer = (state = initSate, action) => {
    switch (action.type) {
        case SET_PROFILE_PHOTO_URL:
            return {
                ...state,
                photoURL: action.url
            }
        default:
            return state;
    }
}

export default profileReducer;