import React from 'react';
import styles from './styles';
import home from '../../../assets/home.svg';
import schedule from '../../../assets/schedule.svg';
import prototype from '../../../assets/prototype.svg';
import tasks from '../../../assets/tasks.svg';
import files from '../../../assets/files.svg';
import communication from '../../../assets/communication.svg';

const images = { home, schedule, prototype, tasks, files, communication };

class SidebarTab extends React.Component {
  render() {
    let { name } = this.props;
    return (
      <div className={`sidebar-tab ${styles.sidebarTab}`}>
        <div className={`sidebar-tab__icon ${name}`}>
          <img
            className={`img ${styles.img}`}
            src={images[name.toLowerCase()]}
            alt={name}
          />
        </div>
        <p>{name}</p>
      </div>
    );
  }
}

export default SidebarTab;
