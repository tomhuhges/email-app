import React from 'react';
import styles from './styles';

class ReplyField extends React.Component {
  render() {
    return (
      <div className={`reply-field ${styles.replyField}`}>
        <div className={`tab ${styles.tab}`}>Reply to <span className="blue">hello@kamilbachanek.com</span></div>
        <textArea
          col="10"
          className={`reply-textarea ${styles.textarea}`}
          placeholder="Reply..."
        />
      </div>
    );
  }
}

export default ReplyField;
