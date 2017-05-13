import React from 'react';

class InboxHeaderTab extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div className="inbox-header-tab">
        <p>{name}</p>
      </div>
    );
  }
}

export default InboxHeaderTab;
