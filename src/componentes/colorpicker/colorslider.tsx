import * as React from 'react';
interface Props {
    value: number;
    onValueUpdated: (newValue: number) => void;
}
export const ColorSliderComponent = (props: Props) =>
    <>
        <input
            type="range"
            min="0"
            max="255"
            value={props.value}
            onChange={
                (e) => props.onValueUpdated(+e.target.value)
            }
        />
        {props.value}
    </>