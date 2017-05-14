import React from 'react';
import CreateMessage from './CreateMessage/component';
import MessageList from './MessageList/component';
import styles from './styles';

class InboxSidebar extends React.Component {
  render() {
    return (
      <div className={`inbox-sidebar ${styles.inboxSidebar}`}>
        <CreateMessage />
        <MessageList />
      </div>
    );
  }
}

export default InboxSidebar;
