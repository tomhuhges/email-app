import React from 'react';
import MessageHeader from './MessageHeader/component';
import MessageMain from './MessageMain/component';
import MessageFooter from './MessageFooter/component';
import styles from './styles';

class MessageView extends React.Component {
  render() {
    return (
      <div className={`message-view ${styles.messageView}`}>
        <MessageHeader />
        <MessageMain />
        <MessageFooter />
      </div>
    );
  }
}

export default MessageView;
