import * as React from 'react';

interface Props {
    placeAddress: string;
    onChange: (address: string) => void;
};

export const PlaceFindByAddressComponent = (props: Props) => {
    return(
        <>
            <label>Search by place address </label>
            <input
                type='text'
                value={props.placeAddress}
                onChange = {
                    (e) => props.onChange(e.target.value)
                }
            />
            <br/><br/>
        </>
    );
};