import React from 'react';
import MessageHeaderActions from './MessageHeaderActions/component';
import MessageListActions from './MessageListActions/component';
import styles from './styles';

class MessageHeader extends React.Component {
  render() {
    return (
      <div className={`message-header ${styles.messageHeader}`}>
        <MessageHeaderActions />
        <MessageListActions />
      </div>
    );
  }
}

export default MessageHeader;
