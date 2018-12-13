import * as React from 'react';
import {connect} from 'react-redux';
import {State} from '../../reducers';
import {PlaceFoundByTypeComponent} from './found-type';

const mapStateToProps = (state: State) => ({
    placeType: state.placeFinderByTypeReducer.placeType
});

const mapDispatchToProps = (dispatch) => ({

});

export const FoundByTypeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaceFoundByTypeComponent);