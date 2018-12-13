import {connect} from 'react-redux';
import {State} from '../../reducers';
import {findPlaceByAddressActionCompleted} from '../../actions';
import {PlaceFindByAddressComponent} from './find-address';

const mapStateToProps = (state: State) => ({
    placeAddress: state.placeFinderByAddressReducer.placeAddress,
});

const mapDispatchToProps = (dispatch) => ({
    onChange: (address: string) => dispatch(
        findPlaceByAddressActionCompleted(address)
    ),
});

export const FindByAddressContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaceFindByAddressComponent);