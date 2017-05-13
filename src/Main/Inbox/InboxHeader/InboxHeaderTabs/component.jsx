import React from 'react';
import InboxHeaderTab from './InboxHeaderTab/component';

class InboxHeaderTabs extends React.Component {
  render() {
    return (
      <div className="inbox-header-tabs">
        <InboxHeaderTab name="Inbox" />
        <InboxHeaderTab name="Sent" />
        <InboxHeaderTab name="Draft" />
        <InboxHeaderTab name="Spam" />
        <InboxHeaderTab name="Trash" />
      </div>
    );
  }
}

export default InboxHeaderTabs;
