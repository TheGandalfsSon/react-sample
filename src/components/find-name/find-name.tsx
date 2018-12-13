import * as React from 'react';
interface Props {
    placeName: string;
    onChange: (name: string) => void;
};
export const PlaceFindByNameComponent = (props: Props) => {
    return(
        <>
            <label>Search by place name </label>
            <input 
                value={props.placeName}
                onChange={
                    (e) => props.onChange(e.target.value)
                }
            />
            <br/><br/>
        </>
    );
};