import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search">
        <input name="search" type="text" placeholder="Search" />
      </div>
    );
  }
}

export default SearchBar;
