import {combineReducers} from 'redux';
import {placeReducer, PlaceState} from './place-reducer';
import {placeFinderByNameReducer, FinderByNameState} from './finder/finder-name.reducer';
import {placeFinderByAddressReducer, FinderByAddressState} from './finder/finder-address.reducer';
import {placeFinderByTypeReducer, FinderByTypeState} from './finder/finder-type.reducer';
export interface State {
    placeReducer: PlaceState;
    placeFinderByNameReducer: FinderByNameState;
    placeFinderByAddressReducer: FinderByAddressState;
    placeFinderByTypeReducer: FinderByTypeState;
};
export const reducers = combineReducers<State>({
    placeReducer,
    placeFinderByNameReducer,
    placeFinderByAddressReducer,
    placeFinderByTypeReducer
});