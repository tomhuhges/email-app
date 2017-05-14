import React from 'react';
import styles from './styles';
import sticky from '../../../../../assets/pin.svg';
import archive from '../../../../../assets/inbox.svg';
import trash from '../../../../../assets/trash.svg';
import print from '../../../../../assets/print.svg';
import forward from '../../../../../assets/right-arrow.svg';

class MessageHeaderActions extends React.Component {
  render() {
    return (
      <div className={`message-header-actions ${styles.actions}`}>
        <img
          className={`img ${styles.img}`}
          src={sticky}
          alt="Sticky"
        />
        <img
          className={`img ${styles.img}`}
          src={archive}
          alt="Archive"
        />
        <img
          className={`img ${styles.img}`}
          src={trash}
          alt="Trash"
        />
        <img
          className={`img ${styles.img}`}
          src={print}
          alt="Print"
        />
        <img
          className={`img ${styles.img}`}
          src={forward}
          alt="Forward"
        />
      </div>
    );
  }
}

export default MessageHeaderActions;
