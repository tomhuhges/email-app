import React from 'react';
import Sidebar from './Sidebar/component';
import Inbox from './Inbox/component';
import styles from './styles';

class Main extends React.Component {
  render() {
    return (
      <div className={`main ${styles.main}`}>
        <Sidebar />
        <Inbox />
      </div>
    );
  }
}

export default Main;
