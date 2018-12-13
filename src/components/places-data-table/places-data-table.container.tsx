import {connect} from 'react-redux';
import {placesRequest} from '../../actions';
import {MapComponent} from './places-data-table';
import {State} from '../../reducers';
const mapStateToProps = (state: State) => ({
    places: state.placeReducer,
});
const mapDispatchToProps = (dispatch) => ({
    loadPlaces: () => dispatch(placesRequest())
});
export const PlacesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MapComponent);