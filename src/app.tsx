import * as React from 'react';
import { HelloComponent } from './hello';
import { NameEdit } from './name-edit.component';
import { ColorPicker, ColorBrowser, SidebarComponent, MembersTableComponent } from './componentes';
import { Color } from './model';
interface State {
    username: string;
    editingUserName: string;
    color: Color;
    showSidebar: boolean;
};
interface Props {

};
export class App extends React.Component<Props, State> {
    state: State = {
        username: 'default user name',
        editingUserName: 'default user name',
        color: { 
            red: 90,
            green: 50,
            blue: 70
        },
        showSidebar: false
    };
    toggleSidebarVisibility = () => {
        this.setState({showSidebar: !this.state.showSidebar});
    };
    onFinalChangeName = () => {
        this.setState({username: this.state.editingUserName});
    };
    setColorState = (color: Color) => {
        this.setState({color});
    }
    onEditingNameUpdate = (editingUserName: string) => {
        this.setState({editingUserName});
    };
    componentDidMount() {
        setTimeout(() => {
            const newName = 'desde llamada AJAX';
            this.setState({
                username: newName,
                editingUserName: newName
            });
        }, 1000);
    };
    render() {
        return (
            <>
                <SidebarComponent show={this.state.showSidebar}>
                    <h1>Cool Scfi movies</h1>
                    <ul>
                        <li><a href="https://www.imdb.com/title/tt0816692/">Interstellar</a></li>
                        <li><a href="https://www.imdb.com/title/tt0083658/">Blade Runner</a></li>
                        <li><a href="https://www.imdb.com/title/tt0062622/">2001: a space odyssey</a></li>
                    </ul>
                </SidebarComponent>
                <MembersTableComponent ></MembersTableComponent>
                <ColorBrowser color={this.state.color} />
                <ColorPicker color={this.state.color} onColorUpdated={this.setColorState} />
                <HelloComponent userName={this.state.username} />
                <NameEdit editingUserName={this.state.editingUserName}
                    onEditingNameUpdated={this.onEditingNameUpdate}
                    onNameUpdatedRequest={this.onFinalChangeName}
                    disabled={!this.state.editingUserName || (this.state.username === this.state.editingUserName)} />
                <div style={{float: "right"}}>
                    <button onClick={this.toggleSidebarVisibility}>
                        Toggle Sidebar
                    </button>
                </div>
            </>
        );
    };
};