import * as React from 'react';
import { MemberEntity } from '../../model';
import { MemberRow } from './membersrow';
interface Props {
    members: MemberEntity[];
}
export const PrintTableBody = (props : Props) => 
    <tbody>
        {
            props.members
                .map(
                    member =>
                        <MemberRow key={member.id} member={member}></MemberRow>
                )
        }
     </tbody>

