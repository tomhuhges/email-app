import React from 'react';
import CreateMessage from './CreateMessage/component';
import MessageList from './MessageList/component';

class InboxSidebar extends React.Component {
  render() {
    return (
      <div className="inbox-sidebar">
        <CreateMessage />
        <MessageList />
      </div>
    );
  }
}

export default InboxSidebar;
