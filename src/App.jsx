import React, { Component } from 'react';
import Header from './Header/component';
import Main from './Main/component';

require('./css/style.css');

export default class App extends Component {
  render() {
    return (
      <div className="app sans-serif">
        <Header />
        <Main />
      </div>
    );
  }
}
