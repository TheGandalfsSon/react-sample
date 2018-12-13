export interface Places {
    placeId: number;
    placeCode: string;
    placeName: string;
    placeAddress: string;
    placeType: string;
};
export const createDefaultPlace = () => ({
    placeId: 0,
    placeCode: 'defaultPlaceCode',
    placeName: 'defaultPlaceName',
    placeAddress: 'defaulPlaceAddress',
    placeType: 'defaultPlaceType'
});