import React from 'react';

class InboxHeaderTab extends React.Component {
  render() {
    const { name, color } = this.props;
    return (
      <div className={`inbox-header-tab ${color}`}>
        {name}
      </div>
    );
  }
}

export default InboxHeaderTab;
