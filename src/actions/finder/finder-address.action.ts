import {actionEnums} from '../../common';

export const findPlaceByAddressActionCompleted = (newAddress: string) => ({
    type: actionEnums.FIND_PLACES_BY_ADDRESS,
    payload: newAddress
})