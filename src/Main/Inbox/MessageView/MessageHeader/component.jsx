import React from 'react';
import MessageHeaderActions from './MessageHeaderActions/component';
import MessageListActions from './MessageListActions/component';

class MessageHeader extends React.Component {
  render() {
    return (
      <div className="message-header">
        <MessageHeaderActions />
        <MessageListActions />
      </div>
    );
  }
}

export default MessageHeader;
