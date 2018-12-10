import {actionEnums} from '../common/actionEnums';

export const updateUserProfileName = (newName: string) => ({
    type: actionEnums.UPDATE_USERPROFILE_NAME,
    payload: newName
});