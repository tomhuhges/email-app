import React from 'react';
import InboxHeader from './InboxHeader/component';
import InboxSidebar from './InboxSidebar/component';
import MessageView from './MessageView/component';
import styles from './styles';

class Inbox extends React.Component {
  render() {
    return (
      <div className={`inbox ${styles.inbox}`}>
        <InboxHeader />
        <InboxSidebar />
        <MessageView />
      </div>
    );
  }
}

export default Inbox;
