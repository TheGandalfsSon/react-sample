import * as React from 'react';
import {connect} from 'react-redux';
import {State} from '../../reducers';
import {PlaceFoundByAddressComponent} from './found-address';

const mapStateToProps = (state: State) => ({
    placeAddress: state.placeFinderByAddressReducer.placeAddress,
});

const mapDispatchToProps = (dispatch) => ({

});

export const FoundByAddressContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaceFoundByAddressComponent);