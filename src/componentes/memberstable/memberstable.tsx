import * as React from 'react';
import { MemberEntity } from '../../model';
import { getAllMembers } from '../../api';
import { PrintTableHead } from './memberstablehead';
import { PrintTableBody } from './memberstablebody';
interface State {
    members: MemberEntity[];
};
export class MembersTableComponent extends React.Component<{}, State> {
    state: State = {
        members: [],
    };
    componentDidMount(){
        getAllMembers().then(
            (members) =>
            this.setState({members})
        )
    };
    render() {
        return (
            <>
                <table>
                    <PrintTableHead/>
                    <PrintTableBody members={this.state.members}/>
                </table>
            </>
        );
    };
};