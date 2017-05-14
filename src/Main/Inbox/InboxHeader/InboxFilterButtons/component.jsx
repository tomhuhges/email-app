import React from 'react';
import InboxFilterButton from './InboxFilterButton/component';
import InboxAddFilter from './InboxAddFilter/component';
import styles from './styles';

class InboxFilterButtons extends React.Component {
  render() {
    return (
      <div className={`inbox-filter-buttons ${styles.inboxFilterButtons}`}>
        <InboxFilterButton color="red" name="Important" />
        <InboxFilterButton color="yellow" name="Personal" />
        <InboxFilterButton color="green" name="Work" />
        <InboxFilterButton color="pink" name="Events" />
        <InboxAddFilter />
      </div>
    );
  }
}

export default InboxFilterButtons;
