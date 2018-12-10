import * as React from 'react';
const classNames = require('./sidebar.css');
interface Props {
    show: boolean;
};
const divStyle = (show: boolean): React.CSSProperties => ({
    width: show ? '23rem': '0rem'
});
export const SidebarComponent: React.StatelessComponent<Props> = (props) =>
    <div 
        id="mySidenav"
        className={classNames.sidenav}
        style={divStyle(props.show)}>
        {props.children}
    </div>