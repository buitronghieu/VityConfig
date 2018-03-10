import React, { Component } from 'react';

export default class Application extends Component {

    render() {
        return (
            <div style={{display: "flex", flexDirection: 'row', margin: 5}}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", fontWeight:"bold" }}>
                    <text >Manufacturer</text>
                    <text>Product</text>
                    <text>Application</text>
                    <text>Device Type</text>
                    <text>Program Version</text>
                    <text>Fingerprint</text>
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <text style={styles.text}>MD technologies</text>
                    <text style={styles.text}>SCN-IP100.02 IP</text>
                    <text style={styles.text}>KNX IP Router</text>
                    <text style={styles.text}>$0135</text>
                    <text style={styles.text}>1.1</text>
                    <text style={styles.text}>EBD5</text>
                </div>
            </div>
        );
    }
}

const styles={
    text:{
        overflow:"hidden", 
        textOverflow:"ellipsis",
        whiteSpace: "nowrap", 
        width: 100
    }
}
