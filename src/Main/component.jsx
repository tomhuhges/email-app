import React from 'react';
import Sidebar from './Sidebar/component';
import Inbox from './Inbox/component';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Sidebar />
        <Inbox />
      </div>
    );
  }
}

export default Main;
