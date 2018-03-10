// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class Root extends Component<Props> {
  render() {
    return (
      <Provider store={this.props.store}>
      <MuiThemeProvider>
        <App />
        </MuiThemeProvider>
      </Provider>
    );
  }
}
