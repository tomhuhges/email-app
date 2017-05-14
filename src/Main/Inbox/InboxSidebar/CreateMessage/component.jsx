import React from 'react';
import styles from './styles';
import createIcon from '../../../../assets/create.svg';

class CreateMessage extends React.Component {
  render() {
    return (
      <button className={`create-message ${styles.createMessage}`}>
        <img
          className={`create-message-icon ${styles.img}`}
          src={createIcon}
          alt=""
        />
        <span>Create New Message</span>
        <span />
      </button>
    );
  }
}

export default CreateMessage;
