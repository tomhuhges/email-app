import React from 'react';
import InboxHeaderTab from './InboxHeaderTab/component';
import styles from './styles';

class InboxHeaderTabs extends React.Component {
  render() {
    return (
      <div className={`inbox-header-tabs ${styles.inboxHeaderTabs}`}>
        <InboxHeaderTab color="light-gray" name="Inbox" />
        <InboxHeaderTab name="Sent" />
        <InboxHeaderTab name="Draft" />
        <InboxHeaderTab name="Spam" />
        <InboxHeaderTab name="Trash" />
      </div>
    );
  }
}

export default InboxHeaderTabs;
