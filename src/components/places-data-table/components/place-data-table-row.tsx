import * as React from 'react';
import {Places} from '../../../model';

interface Props  {
  place : Places;
}

export const PlacesRowComponent = (props: Props) => {
    return (
    <tr>
        <td>
            <span>{props.place.placeId}</span>
        </td>
        <td>
            <span>{props.place.placeCode}</span>
        </td>
        <td>
            <span>{props.place.placeName}</span>
        </td>
        <td>
            <span>{props.place.placeAddress}</span>
        </td>
        <td>
            <span>{props.place.placeType}</span>
        </td>
     </tr>
   );
}