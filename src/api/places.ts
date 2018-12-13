import { Places, createDefaultPlace } from "../model/places/places";
const placesURL = 'https://api.myjson.com/bins/7yztw';
class PlaceAPI {
    getAllPlaces(): Promise<Places[]> {
        return fetch(placesURL)
            .then((reponse) => this.checkStatus(reponse))
            .then((response) => this.parseJSON(response))
            .then((response) => this.resolvePlaces(response));
    };
    private checkStatus(response : Response) : Promise<Response> {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        } else {
            let error = new Error(response.statusText);
            throw error;
        };
    };
    private parseJSON(response: Response): Promise<Places[]> {
        return response.json();
    };
    private resolvePlaces(data: Places[]): Promise<Places[]> {
        const places = data.map((placeN) => {
            let place: Places = createDefaultPlace();
                place.placeId = placeN.placeId;
                place.placeCode = placeN.placeCode;
                place.placeName = placeN.placeName;
                place.placeAddress = placeN.placeAddress;
                place.placeType = placeN.placeType;
                return place;
        });
        return Promise.resolve(places);
    };
};
export const placesAPI = new PlaceAPI();