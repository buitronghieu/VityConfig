import React, { Component } from 'react';
import Menu from './Menu';
import Main from './Main';
export default class Catalogs extends Component {

    render() {
        return (
            <div style={{ flex: 1, margin: 0, display: "flex", flexDirection: 'column', height: '100%' }}>
                <Menu />
                <Main />
            </div>
        );
    }
}