import {actionEnums} from '../../common';

export const findPlaceByTypeActionCompleted = (newType: string) => ({
    type: actionEnums.FIND_PLACES_BY_TYPE,
    payload: newType
});