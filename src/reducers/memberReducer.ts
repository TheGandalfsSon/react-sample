import {actionEnums} from '../common/actionEnums';
import {MemberEntity} from '../model/member';
export type MemberState = MemberEntity[];
export const memberReducer = (state: MemberState = [], action) => {
    switch(action.type){
        case actionEnums.MEMBER_REQUEST_COMPLETED:
            return handleMemberRequestCompleted(state, action.payload);
    };
    return state;
};
export const handleMemberRequestCompleted = (state: MemberState = [], payload: MemberEntity[]): MemberState => {
    return (payload)
};