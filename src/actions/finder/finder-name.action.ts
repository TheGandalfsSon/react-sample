import {actionEnums} from '../../common';

export const findPlaceByNameActionCompleted = (newName: string) => ({
    type: actionEnums.FIND_PLACES_BY_NAME,
    payload: newName
})