import * as React from 'react';
import {Places} from '../../../model';
import { PlacesRowComponent } from './place-data-table-row';
interface Props {
    places: Places[];
};

export const PlacesHeaderComponent = (props: Props) => {
    return(
        <div className="row">
            <h2> Places Page</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            PLACE CODE
                        </th>
                        <th>
                            PLACE NAME
                        </th>
                        <th>
                            PLACE ADDRESS
                        </th>
                        <th>
                            PLACE TYPE
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.places
                            .map((place: Places) =>
                                <PlacesRowComponent key={place.placeId} place={place}/>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}