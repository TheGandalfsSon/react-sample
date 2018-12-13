import * as React from 'react';

interface Props {
    placeType: string;
};

export const PlaceFoundByTypeComponent = (props: Props) => {
    return(
        <>
            <span>TYPE --> {props.placeType}</span>
            <br/><br/>
        </>
    );
};