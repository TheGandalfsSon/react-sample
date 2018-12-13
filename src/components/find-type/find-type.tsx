import * as React from 'react';

interface Props {
    placeType: string;
    onChange: (type: string) => void;
}

export const PlaceFindByTypeComponent = (props: Props) => {
    return(
        <>
            <label>Search by place type </label>
            <input
                type='text'
                value={props.placeType}
                onChange={
                    (e) => props.onChange(e.target.value)
                }
            />
            <br/><br/>
        </>
  );
};