import * as React from 'react';
import {MemberEntity} from '../../model';
interface Props {
    member: MemberEntity;
}
export const MemberRow = ({member}: Props) =>
    <tr>
        <td> 
            <img src={member.avatar_url} style ={{maxWidth: '10rem'}}/>
        </td>
        <td>
            {member.id}
        </td>
        <td>
            {member.login}
        </td>
    </tr>