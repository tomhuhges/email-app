import React, { Component } from 'react';
import Header from './Header/component';
import Main from './Main/component';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
      </div>
    );
  }
}
