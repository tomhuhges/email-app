import React from 'react';
import InboxHeader from './InboxHeader/component';
import InboxSidebar from './InboxSidebar/component';
import MessageView from './MessageView/component';

class Inbox extends React.Component {
  render() {
    return (
      <div className="inbox">
        <InboxHeader />
        <InboxSidebar />
        <MessageView />
      </div>
    );
  }
}

export default Inbox;
