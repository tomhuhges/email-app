import React from 'react';
import styles from './styles';

class SearchBar extends React.Component {
  render() {
    return (
      <div className={`search-bar ${styles.searchBar}`}>
        <input
          className={`search-bar-input ${styles.input}`}
          name="search"
          type="text"
          placeholder="Search"
        />
      </div>
    );
  }
}

export default SearchBar;
