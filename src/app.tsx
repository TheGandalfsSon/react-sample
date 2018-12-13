import * as React from 'react';
import {
    PlacesContainer,
    FindByAddressContainer,
    FoundByNameContainer,
    FoundByAddressContainer,
    FoundByTypeContainer,
    FindByNameContainer,
    FindByTypeContainer
} from './components';

export const App = () =>
    <>
        <FoundByNameContainer/>
        <FoundByAddressContainer/>
        <FoundByTypeContainer/>
        <FindByNameContainer/>
        <FindByAddressContainer/>
        <FindByTypeContainer/>
        <PlacesContainer/>
    </>