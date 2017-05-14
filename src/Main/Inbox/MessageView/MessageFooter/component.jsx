import React from 'react';
import ReplyField from './ReplyField/component';
import MessageFooterActions from './MessageFooterActions/component';
import styles from './styles';

class MessageFooter extends React.Component {
  render() {
    return (
      <div className={`message-footer ${styles.messageFooter}`}>
        <ReplyField />
        <MessageFooterActions />
      </div>
    );
  }
}

export default MessageFooter;
