import React from 'react';
import SearchBar from './SearchBar/component';
import UserProfile from './UserProfile/component';
import styles from './styles';

class Header extends React.Component {
  render() {
    return (
      <div className={`header ${styles.header}`}>
        <SearchBar />
        <UserProfile />
      </div>
    );
  }
}

export default Header;
