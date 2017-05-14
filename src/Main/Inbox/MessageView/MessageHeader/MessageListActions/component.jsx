import React from 'react';
import styles from './styles';
import undo from '../../../../../assets/undo-arrow.svg';
import redo from '../../../../../assets/redo-arrow.svg';

class MessageListActions extends React.Component {
  render() {
    return (
      <div className={`message-list-actions ${styles.actions}`}>
        <img
          className={`img ${styles.img}`}
          src={undo}
          alt="Reply"
        />
        <img
          className={`img ${styles.img}`}
          src={redo}
          alt="Reply all"
        />
      </div>
    );
  }
}

export default MessageListActions;
