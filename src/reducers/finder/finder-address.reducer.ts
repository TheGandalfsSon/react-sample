import {actionEnums} from '../../common';

export interface FinderByAddressState {
    placeAddress: string;
};

const defaultPlaceAddressState = (): FinderByAddressState => ({
    placeAddress: 'DefaultPlaceAddress',
});

export const placeFinderByAddressReducer = (state: FinderByAddressState = defaultPlaceAddressState(), action) => {
    switch(action.type) {
        case actionEnums.FIND_PLACES_BY_ADDRESS:
            return handleFindByAddressAction(state, action.payload);
    };
    return state;
};
const handleFindByAddressAction = (state: FinderByAddressState, placeAddress): FinderByAddressState => ({
    ...state,
    placeAddress,
});