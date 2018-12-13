import * as React from 'react';

interface Props {
    placeAddress: string;
};

export const PlaceFoundByAddressComponent = (props: Props) => {
    return(
        <>
            <span>ADDRESS --> {props.placeAddress}</span>
            <br/><br/>
        </>
    );
};