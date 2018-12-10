import {actionEnums} from '../common/actionEnums';
export interface UserProfileState {
    firstname: string;
};
const defaultUserState = (): UserProfileState => ({
    firstname:'John Doe',
});
export const userProfileReducer = (state: UserProfileState = defaultUserState(), action) => {
    switch(action.type){
        case actionEnums.UPDATE_USERPROFILE_NAME:
            return handleUserProfileAction(state, action.payload);
    }
    return state;
};
const handleUserProfileAction = (state: UserProfileState, firstname: string): UserProfileState => ({
    ...state,
    firstname
});