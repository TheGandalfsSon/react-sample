import * as React from 'react';
import {PlaceFoundByNameComponent} from './found-name';
import {State} from '../../reducers';
import {connect} from 'react-redux';
const mapStateToProps = (state: State) => ({
    placeName: state.placeFinderByNameReducer.placeName,
});
const mapDispachToProps = (dispatch) => ({

});
export const FoundByNameContainer = connect(
    mapStateToProps,
    mapDispachToProps
)(PlaceFoundByNameComponent);