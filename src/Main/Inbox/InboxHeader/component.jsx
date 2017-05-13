import React from 'react';
import InboxHeaderTabs from './InboxHeaderTabs/component';
import InboxFilterButtons from './InboxFilterButtons/component';

class InboxHeader extends React.Component {
  render() {
    return (
      <div className="inbox-header">
        <InboxHeaderTabs />
        <InboxFilterButtons />
      </div>
    );
  }
}

export default InboxHeader;
