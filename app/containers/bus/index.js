import React, { Component } from 'react';
export default class Bus extends Component {

    render() {
        return (
            <div style={{margin:0}}>
               <div className="top" style={{margin: 5, display: "flex", flexDirection:"row"}}>
                    <button style={{margin: 5}}><img src={require('../../images/import.png')} style={{width: 20, height: 20}} /> Import</button>
                    <button style={{margin: 5}}><img src={require('../../images/export.png')} style={{width: 20, height: 20}} /> Export</button>
               </div>
            </div>
        );
    }
}