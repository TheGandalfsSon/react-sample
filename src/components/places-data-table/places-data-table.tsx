import * as React from 'react';
import { Places } from '../../model/places/places';
import { PlacesHeaderComponent } from './components/place-data-table-header';
interface Props {
    places: Places[];
    loadPlaces: () => any;
};
export const MapComponent = (props: Props) =>
    <>
        <input type="submit"
            value="Show Places"
            className="btn btn-default"
            onClick={() => props.loadPlaces()}
        />
        <br/>
        <PlacesHeaderComponent places={props.places}/>
    </>