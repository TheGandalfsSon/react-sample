import { connect } from 'react-redux';
import { memberRequest } from '../../actions/memberRequest';
import { MemberAreaComponent } from './memberArea';
import { State } from '../../reducers';
const mapStateToProps = (state: State) => ({
    members: state.memberReducer
});
const mapDispatchToProps = (dispatch) => ({
    loadMembers: () => dispatch(memberRequest())
});
export const MembersAreaContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MemberAreaComponent);