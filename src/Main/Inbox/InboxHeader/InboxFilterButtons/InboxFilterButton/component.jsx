import React from 'react';

class InboxFilterButton extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div className="inbox-filter-button">
        <p><span className="checkbox">O</span> {name}</p>
      </div>
    );
  }
}

export default InboxFilterButton;
