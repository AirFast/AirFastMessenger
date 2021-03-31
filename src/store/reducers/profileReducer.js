import {UPDATE_PROFILE_PHOTO, UPDATE_PROFILE_PHOTO_SUCCESS} from "../actions/profileActions";

const initSate = {
    isUpdatingPhoto: false,
}

const profileReducer = (state = initSate, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_PHOTO:
            return {
                ...state,
                isUpdatingPhoto: true
            }
        case UPDATE_PROFILE_PHOTO_SUCCESS:
            return {
                ...state,
                isUpdatingPhoto: false
            }
        default:
            return state;
    }
}

export default profileReducer;