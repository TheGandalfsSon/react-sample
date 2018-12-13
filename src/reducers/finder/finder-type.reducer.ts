import {actionEnums} from '../../common';

export interface FinderByTypeState {
    placeType: string;
};

const defaultPlaceTypeState = (): FinderByTypeState => ({
    placeType: 'DefaultPlaceType',
});

export const placeFinderByTypeReducer = (state: FinderByTypeState = defaultPlaceTypeState(), action): FinderByTypeState => {
    switch(action.type){
        case actionEnums.FIND_PLACES_BY_TYPE:
            return handleFinderByTypeAction(state, action.payload);
    };
    return state;
};

const handleFinderByTypeAction = (state: FinderByTypeState, placeType: string): FinderByTypeState => ({
    ...state,
    placeType
});