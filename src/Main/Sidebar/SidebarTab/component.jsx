import React from 'react';

class SidebarTab extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div className="sidebar-tab">
        <div className={`sidebar-tab__icon ${name}`}>
          <img src="" alt={name} />
        </div>
        <p>{name}</p>
      </div>
    );
  }
}

export default SidebarTab;
