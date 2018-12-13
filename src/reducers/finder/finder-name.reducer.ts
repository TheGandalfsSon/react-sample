import {actionEnums} from '../../common';

export interface FinderByNameState {
    placeName: string;
};

const defaultPlaceNameState = (): FinderByNameState => ({
    placeName: 'DefaultPlaceName',
});

export const placeFinderByNameReducer = (state: FinderByNameState = defaultPlaceNameState(), action) => {
    switch(action.type) {
        case actionEnums.FIND_PLACES_BY_NAME:
            return handleFindByNameAction(state, action.payload);
    };
    return state;
};
const handleFindByNameAction = (state: FinderByNameState, placeName): FinderByNameState => ({
    ...state,
    placeName,
});