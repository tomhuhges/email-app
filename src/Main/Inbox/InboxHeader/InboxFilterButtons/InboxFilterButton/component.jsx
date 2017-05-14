import React from 'react';

class InboxFilterButton extends React.Component {
  render() {
    const { name, color } = this.props;
    return (
      <div className="inbox-filter-button">
        <strong className={`checkbox ${color}`}>O</strong> {name}
      </div>
    );
  }
}

export default InboxFilterButton;
