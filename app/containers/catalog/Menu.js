import React, { Component } from 'react';
import { FlatButton, FontIcon, IconButton, AutoComplete, TextField } from 'material-ui';
import Clound from 'material-ui/svg-icons/file/cloud';
import CloundDownload from 'material-ui/svg-icons/file/cloud-download';
import Import_Export from 'material-ui/svg-icons/communication/import-export';
// import FontIcon from 'material-ui/FontIcon';
const iconStyles = {
    marginRight: 10,
    fontSize: 10
};

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        }
    }
    handleUpdateInput(value) {
        this.setState({
            dataSource: [value, value + value, value + value + value]
        })
    }
    render() {
        return (
            <div className="menu" style={{ margin: 5, display: "flex", flexDirection: "row" }} >
                <FlatButton label="Import" secondary={true} icon={<Import_Export style={iconStyles} />} />
                <FlatButton label="Export" secondary={true} icon={<Import_Export style={iconStyles} />} />
                <IconButton><Clound /></IconButton>
                <FlatButton label="Download" secondary={true} icon={<CloundDownload style={iconStyles} />} />
                <TextField disabled={true} style={{float:"left", flex:1}}>
                    <Clound  style={{height: 30}}/>
                </TextField>
                <AutoComplete hintText="Search" dataSource={this.state.dataSource} onUpdateInput={this.handleUpdateInput} />
            </div>
        );
    }
}