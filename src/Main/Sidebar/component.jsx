import React from 'react';
import SidebarTab from './SidebarTab/component';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <SidebarTab name="Home" />
        <SidebarTab name="Prototype" />
        <SidebarTab name="Schedule" />
        <SidebarTab name="Tasks" />
        <SidebarTab name="Communication" />
        <SidebarTab name="Files" />
      </div>
    );
  }
}

export default Sidebar;
