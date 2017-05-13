import React from 'react';
import InboxFilterButton from './InboxFilterButton/component';
import InboxAddFilter from './InboxAddFilter/component';

class InboxHeader extends React.Component {
  render() {
    return (
      <div className="inbox-filter-buttons">
        <InboxFilterButton name="Important" />
        <InboxFilterButton name="Personal" />
        <InboxFilterButton name="Work" />
        <InboxFilterButton name="Events" />
        <InboxAddFilter />
      </div>
    );
  }
}

export default InboxHeader;
