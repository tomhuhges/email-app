import React from 'react';
import SearchBar from './SearchBar/component';
import UserProfile from './UserProfile/component';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <SearchBar />
        <UserProfile />
      </div>
    );
  }
}

export default Header;
