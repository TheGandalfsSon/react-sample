import * as React from 'react';
interface Props {
    placeName: string;
};
export const PlaceFoundByNameComponent = (props: Props) => {
    return(
        <>
            <span>NAME --> {props.placeName}</span>
            <br/><br/>
        </>
    );
};