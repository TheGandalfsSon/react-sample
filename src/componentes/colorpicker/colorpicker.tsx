import * as React from 'react';
import { Color } from '../../model';
import { ColorSliderComponent } from './colorslider';

interface Props {
    color: Color;
    onColorUpdated: (color: Color) => void;
}
const onColorToUpdate = (props: Props, fieldName: keyof Color) => (value) => {
    props.onColorUpdated(
        {
            ...props.color,
            [fieldName]: value
        }
    )
}
export const ColorPicker = (props: Props) =>
    //Esto se puede cambiar por los colorslider como refactorizacion, pero si la interface color obtiene mas atributos, se puede liar
    /*{
        Object.keys(props.color)
        .map(
            (fieldName: keyof Color) =>
                <>
                    <ColorSliderComponent 
                        key={fieldName}
                        value={props.color[fieldName]}
                        onValueUpdated={
                            onColorToUpdate(props, fieldName)
                        }
                    />
                    <br/>
                </>
            )
    }*/
    <>
        <ColorSliderComponent
            value={props.color.red}
            onValueUpdated={onColorToUpdate(props, 'red')}
        />
        <br />
        <ColorSliderComponent
            value={props.color.green}
            onValueUpdated={onColorToUpdate(props, 'green')}
        />
        <br />
        <ColorSliderComponent
            value={props.color.blue}
            onValueUpdated={onColorToUpdate(props, 'blue')}
        />
    </>
