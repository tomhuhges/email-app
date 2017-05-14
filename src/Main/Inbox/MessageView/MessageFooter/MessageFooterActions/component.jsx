import React from 'react';
import styles from './styles';
import attach from '../../../../../assets/attach.svg';
import send from '../../../../../assets/send.svg';

class MessageFooterActions extends React.Component {
  render() {
    return (
      <div className={`message-footer-actions ${styles.actions}`}>
        <div className={`attach ${styles.attach}`}>
          <img
            className={`img ${styles.img}`}
            src={attach}
            alt=""
          />
          <span>Attach Files</span>
          <span />
        </div>
        <div className={`send ${styles.send}`}>
          <span />
          <span>Send Message</span>
          <img
            className={`img ${styles.img}`}
            src={send}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default MessageFooterActions;
