import {actionEnums} from '../common/actionEnums';
import {MemberEntity} from '../model/member';
import { memberAPI } from '../api/member';
export const memberRequestCompleted = (members: MemberEntity[]) => ({
    type: actionEnums.MEMBER_REQUEST_COMPLETED,
    payload: members
});
export const memberRequest = () => (dispatcher) => {
    const promise = memberAPI.getAllMembers();
    promise.then(
        (members) => dispatcher(memberRequestCompleted(members))
    );
    return promise;
}