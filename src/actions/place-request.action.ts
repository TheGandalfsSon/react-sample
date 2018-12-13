import {actionEnums} from '../common';
import {Places} from '../model/places/places';
import {placesAPI} from '../api/places';
export const placeRequestCompleted = (places: Places[]) => ({
    type: actionEnums.GET_PLACES,
    payload: places
});
export const placesRequest = () => (dispatcher) => {
    const promise = placesAPI.getAllPlaces();
    promise.then(
        (places) => dispatcher(placeRequestCompleted(places))
    );
    return promise;
};