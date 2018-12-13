import {actionEnums} from '../common';
import {Places} from '../model';
export type PlaceState = Places[];
export const placeReducer = (state: PlaceState = [], action) => {
    switch(action.type){
        case actionEnums.GET_PLACES:
            return handlePlaceRequestCompleted(state, action.payload);
    };
    return state;
};
export const handlePlaceRequestCompleted = (state: PlaceState = [], payload: Places[]): PlaceState => {
    return(
        payload
    );
};