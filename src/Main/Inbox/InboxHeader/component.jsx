import React from 'react';
import InboxHeaderTabs from './InboxHeaderTabs/component';
import InboxFilterButtons from './InboxFilterButtons/component';
import styles from './styles';

class InboxHeader extends React.Component {
  render() {
    return (
      <div className={`inbox-header ${styles.inboxHeader}`}>
        <InboxHeaderTabs />
        <InboxFilterButtons />
      </div>
    );
  }
}

export default InboxHeader;
