import React, { Component } from 'react';

export default class Catalog extends Component {

    render() {
        return (
            <div style={style.column}>
                <div style={style.column}>
                    <text style={{ fontWeight: "bold", fontSize: 13 }}>SCN-IP000.02 Interface</text>
                    <text style={{ fontSize: 11 }}>SCN-IP000.02 Interface</text>
                </div>
                <div style={style.column}>
                    <div style={style.row}>
                        <text style={{ fontWeight: "bold", flex: 1, fontSize: 13 }}>Order Number</text>
                        <text style={{ flex: 1, fontSize: 13 }}>SCN-IP000.02</text>
                    </div>
                    <div style={style.row}>
                        <text style={{ fontWeight: "bold", flex: 1, fontSize: 13 }}>DIN rail mounting</text>
                        <text style={{ flex: 1, fontSize: 13 }}>SCN-IP000.02</text>
                    </div>
                    <div style={style.row}>
                        <text style={{ fontWeight: "bold", flex: 1, fontSize: 13 }}>Bus current</text>
                        <text style={{flex: 1, fontSize: 13 }}>SCN-IP000.02</text>
                    </div>
                </div>
                <div style={style.column}>
                <text style={{flex: 1, fontSize: 13 }}>IP and HTTP settings, coupler functions</text>
                </div>
            </div>);
    }
}

const style = {
    row: {
        display: "flex",
        flexDirection: 'row',
    },
    column: {
        display: "flex",
        flexDirection: 'column',
        margin :5
    }
}