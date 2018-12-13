import {connect} from 'react-redux';
import {State} from '../../reducers';
import {findPlaceByTypeActionCompleted} from '../../actions';
import {PlaceFindByTypeComponent} from './find-type';

const mapStateToProps = (state: State) => ({
    placeType: state.placeFinderByTypeReducer.placeType,
});

const mapDispatchToProps = (dispatch) => ({
    onChange: (type: string) => dispatch(
        findPlaceByTypeActionCompleted(type)
    ),
});

export const FindByTypeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaceFindByTypeComponent);