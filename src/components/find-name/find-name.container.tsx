import {connect} from 'react-redux';
import {PlaceFindByNameComponent} from './find-name';
import {findPlaceByNameActionCompleted} from '../../actions';
import {State} from '../../reducers';
const mapStateToProps = (state: State) => ({
    placeName: state.placeFinderByNameReducer.placeName,
});
const mapDispatchToProps = (dispatch) => ({
    onChange: (name: string) => dispatch(findPlaceByNameActionCompleted(name)),
});
export const FindByNameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaceFindByNameComponent);